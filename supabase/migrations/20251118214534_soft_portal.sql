/*
  # Create campaigns table

  1. New Tables
    - `campaigns`
      - `id` (uuid, primary key)
      - `name` (text)
      - `pitch` (text)
      - `sector` (text)
      - `funding_goal` (integer)
      - `amount_raised` (integer, default 0)
      - `progress` (integer, default 0)
      - `founder_name` (text)
      - `founder_email` (text)
      - `status` (text, default 'active')
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `campaigns` table
    - Add policies for public read access
*/

CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  pitch text NOT NULL,
  sector text NOT NULL,
  funding_goal integer NOT NULL,
  amount_raised integer DEFAULT 0,
  progress integer DEFAULT 0,
  founder_name text NOT NULL,
  founder_email text NOT NULL,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read campaigns"
  ON campaigns
  FOR SELECT
  TO anon
  USING (status = 'active');

CREATE POLICY "Anyone can insert campaigns"
  ON campaigns
  FOR INSERT
  TO anon
  WITH CHECK (true);