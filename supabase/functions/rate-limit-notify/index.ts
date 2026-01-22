import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "jsr:@supabase/supabase-js@2"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!
const NOTIFY_EMAIL = Deno.env.get("RATE_LIMIT_NOTIFY_EMAIL")!

Deno.serve(async (req) => {
  try {
    // Webhook payload from Supabase
    const payload = await req.json()
    const record = payload.record

    if (!record) {
      return new Response(JSON.stringify({ error: "No record in payload" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const { event_type, ip_address, details, created_at } = record

    const subject = event_type === "global_limit"
      ? "Ardea: Global Rate Limit Hit"
      : "Ardea: IP Rate Limit Hit"

    const emailBody = `
Rate limit triggered on Ardea waitlist signup.

Event Type: ${event_type}
IP Address: ${ip_address || "N/A"}
Time: ${new Date(created_at).toLocaleString()}
Details: ${JSON.stringify(details, null, 2)}

${event_type === "global_limit"
  ? "The global hourly limit (500 signups) was reached. This could indicate a coordinated attack or viral traffic."
  : "An IP address exceeded the hourly limit (3 signups). This could be a bot or someone testing the form."}
`

    // Send email via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Ardea Alerts <alerts@resend.dev>",
        to: [NOTIFY_EMAIL],
        subject,
        text: emailBody,
      }),
    })

    if (!res.ok) {
      const error = await res.text()
      console.error("Resend error:", error)
      throw new Error(`Failed to send email: ${error}`)
    }

    // Mark as notified
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    )

    await supabase
      .from("rate_limit_events")
      .update({ notified: true })
      .eq("id", record.id)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })

  } catch (error) {
    console.error("Notification error:", error)
    return new Response(JSON.stringify({ error: "Failed to send notification" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
})
