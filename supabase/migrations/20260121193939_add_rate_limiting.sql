-- Table to track signup attempts for rate limiting
create table waitlist_rate_limits (
  id uuid default gen_random_uuid() primary key,
  ip_address text not null,
  created_at timestamp with time zone default now()
);

-- Index for efficient IP lookups
create index idx_waitlist_rate_limits_ip_created
  on waitlist_rate_limits(ip_address, created_at);

-- Table to log rate limit events for notifications
create table rate_limit_events (
  id uuid default gen_random_uuid() primary key,
  event_type text not null, -- 'ip_limit' or 'global_limit'
  ip_address text,
  details jsonb,
  created_at timestamp with time zone default now(),
  notified boolean default false
);

-- Remove the overly permissive insert policy
drop policy if exists "Allow anonymous inserts" on waitlist;

-- No public access - Edge Function will use service role
create policy "No public access" on waitlist
  for all using (false);

-- Clean up old rate limit records (run periodically via cron)
create or replace function cleanup_old_rate_limits()
returns void as $$
begin
  delete from waitlist_rate_limits where created_at < now() - interval '2 hours';
end;
$$ language plpgsql security definer;

-- To enable automatic cleanup, run this in the SQL Editor after enabling pg_cron:
-- select cron.schedule('cleanup-rate-limits', '0 * * * *', 'select cleanup_old_rate_limits()');
