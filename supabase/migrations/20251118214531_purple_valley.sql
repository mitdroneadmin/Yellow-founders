/*
  # Create startup submissions table

  1. New Tables
    - `startup_submissions`
      - `id` (uuid, primary key)
      - `founder_name` (text)
      - `founder_email` (text)
      - `startup_name` (text)
      - `funding_goal` (integer)
      - `pitch` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `startup_submissions` table
    - Add policy for public insert access
*/

CREATE TABLE IF NOT EXISTS startup_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  founder_name text NOT NULL,
  founder_email text NOT NULL,
  startup_name text NOT NULL,
  funding_goal integer DEFAULT 0,
  pitch text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE startup_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert startup submissions"
  ON startup_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read startup submissions"
  ON startup_submissions
  FOR SELECT
  TO anon
  USING (true);