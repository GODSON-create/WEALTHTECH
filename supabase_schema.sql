-- SQL Script: Create Registrations Table in Supabase
-- Paste this script into your Supabase SQL Editor (Dashboard -> SQL Editor -> New Query) and click Run.

-- 1. Create the registrations table
CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    university TEXT NOT NULL,
    faculty TEXT NOT NULL,
    department TEXT NOT NULL,
    level TEXT NOT NULL,
    is_founder TEXT NOT NULL,
    describes_best TEXT NOT NULL,
    industry_interest TEXT NOT NULL,
    challenge TEXT NOT NULL,
    why TEXT,
    referral TEXT NOT NULL
);

-- 2. Enable Row Level Security (RLS) to protect applicant data
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy that allows anyone (anonymous public users) to submit their application
CREATE POLICY "Allow public registration insert" 
ON public.registrations 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 4. (Optional) Create a policy that allows only authenticated database administrators to read the entries
CREATE POLICY "Allow authenticated admin read" 
ON public.registrations 
FOR SELECT 
TO authenticated 
USING (true);
