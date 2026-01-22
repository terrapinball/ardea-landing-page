const supabaseUrl = import.meta.env.VITE_SUPABASE_URL

if (!supabaseUrl) {
  throw new Error('Missing VITE_SUPABASE_URL environment variable')
}

export async function joinWaitlist(email: string, tier?: string) {
  const response = await fetch(`${supabaseUrl}/functions/v1/waitlist-signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, tier }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Failed to join waitlist')
  }

  return data
}
