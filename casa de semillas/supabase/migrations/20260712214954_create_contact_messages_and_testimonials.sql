/*
# Create contact_messages and testimonials tables

1. New Tables
- `contact_messages`: stores submissions from the website contact form.
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `phone` (text, nullable) — phone number
  - `email` (text, nullable) — email address
  - `message` (text, not null) — the message body
  - `created_at` (timestamptz, default now())
- `testimonials`: stores customer testimonials displayed on the site.
  - `id` (uuid, primary key)
  - `name` (text, not null) — customer name
  - `role` (text, nullable) — e.g. "Cliente mayorista"
  - `content` (text, not null) — testimonial text
  - `rating` (int, default 5) — star rating 1-5
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on both tables.
- `contact_messages`: allow anon INSERT (visitors submit the form), no SELECT/UPDATE/DELETE for anon (only the business owner should read them via dashboard).
- `testimonials`: allow anon + authenticated SELECT (publicly visible on site), no public writes.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text,
  email text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text,
  content text NOT NULL,
  rating int NOT NULL DEFAULT 5,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_testimonials" ON testimonials;
CREATE POLICY "anon_select_testimonials" ON testimonials FOR SELECT
  TO anon, authenticated USING (true);
