import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "jsr:@supabase/supabase-js@2"

const IP_LIMIT_PER_HOUR = 3
const GLOBAL_LIMIT_PER_HOUR = 500

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    )

    const { email, tier } = await req.json()

    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // Get client IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || req.headers.get("cf-connecting-ip")
      || "unknown"

    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()

    // Check IP rate limit
    const { count: ipCount } = await supabase
      .from("waitlist_rate_limits")
      .select("*", { count: "exact", head: true })
      .eq("ip_address", ip)
      .gte("created_at", oneHourAgo)

    if (ipCount !== null && ipCount >= IP_LIMIT_PER_HOUR) {
      // Log rate limit event
      await supabase.from("rate_limit_events").insert({
        event_type: "ip_limit",
        ip_address: ip,
        details: { email_attempted: email, count: ipCount }
      })

      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // Check global rate limit
    const { count: globalCount } = await supabase
      .from("waitlist_rate_limits")
      .select("*", { count: "exact", head: true })
      .gte("created_at", oneHourAgo)

    if (globalCount !== null && globalCount >= GLOBAL_LIMIT_PER_HOUR) {
      // Log rate limit event
      await supabase.from("rate_limit_events").insert({
        event_type: "global_limit",
        ip_address: ip,
        details: { count: globalCount }
      })

      return new Response(
        JSON.stringify({ error: "Service is busy. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // Record this attempt for rate limiting
    await supabase.from("waitlist_rate_limits").insert({ ip_address: ip })

    // Insert into waitlist
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert({ email: email.toLowerCase().trim(), tier })

    if (insertError) {
      if (insertError.code === "23505") {
        // Unique violation - email already exists
        return new Response(
          JSON.stringify({ error: "This email is already on the waitlist" }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        )
      }
      throw insertError
    }

    return new Response(
      JSON.stringify({ success: true, message: "Successfully joined the waitlist" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )

  } catch (error) {
    console.error("Waitlist signup error:", error)
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
})
