-- Enable RLS on rate limit tables (Edge Functions use service role to bypass)
alter table waitlist_rate_limits enable row level security;
alter table rate_limit_events enable row level security;

-- No public policies - only service role can access these tables
