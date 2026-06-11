-- ========================================================
-- Supabase Admin Policies for TAE Blogs
-- Run this in your Supabase SQL Editor.
-- ========================================================

-- Ensure RLS is enabled on the posts table
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- 1. Drop existing write policies if they exist to avoid duplication
DROP POLICY IF EXISTS "Allow authenticated insert" ON public.posts;
DROP POLICY IF EXISTS "Allow authenticated update" ON public.posts;
DROP POLICY IF EXISTS "Allow authenticated delete" ON public.posts;

-- 2. Create policies to allow authenticated users to Insert, Update, and Delete blog posts
CREATE POLICY "Allow authenticated insert" ON public.posts
    FOR INSERT 
    TO authenticated 
    WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON public.posts
    FOR UPDATE 
    TO authenticated 
    USING (true);

CREATE POLICY "Allow authenticated delete" ON public.posts
    FOR DELETE 
    TO authenticated 
    USING (true);
