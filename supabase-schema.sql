create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text,
  email text unique,
  role text default 'customer',
  created_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  price_per_hour numeric default 49,
  price_per_day numeric default 149,
  security_deposit numeric default 5000,
  late_fee numeric default 500,
  stock int default 1,
  availability boolean default true,
  created_at timestamptz default now()
);

create table if not exists product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  image_url text not null,
  is_primary boolean default false,
  created_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references profiles(id),
  status text default 'pending',
  delivery_type text default 'pickup',
  rental_duration text default '24 Hours',
  total_amount numeric default 0,
  created_at timestamptz default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id),
  quantity int default 1,
  created_at timestamptz default now()
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  amount numeric not null,
  status text default 'submitted',
  payment_proof_url text,
  created_at timestamptz default now()
);

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  government_id_url text,
  selfie_url text,
  address_proof_url text,
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists delivery (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  type text default 'pickup',
  charge numeric default 0,
  delivery_boy_name text,
  tracking_number text,
  estimated_arrival text,
  created_at timestamptz default now()
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  customer_name text,
  quote text,
  rating int default 5,
  created_at timestamptz default now()
);

create table if not exists settings (
  id uuid primary key default gen_random_uuid(),
  key text unique,
  value text,
  created_at timestamptz default now()
);

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  message text,
  is_read boolean default false,
  created_at timestamptz default now()
);
