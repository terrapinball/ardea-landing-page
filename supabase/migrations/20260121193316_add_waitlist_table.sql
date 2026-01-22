create table waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  tier text,
  created_at timestamp with time zone default now()
);

alter table waitlist enable row level security;

create policy "Allow anonymous inserts" on waitlist
  for insert with check (true);
