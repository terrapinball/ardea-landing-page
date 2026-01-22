-- Fix search_path security warning
create or replace function cleanup_old_rate_limits()
returns void as $$
begin
  delete from public.waitlist_rate_limits where created_at < now() - interval '2 hours';
end;
$$ language plpgsql security definer set search_path = public;
