// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ijoottsrpjykvyebvfcx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqb290dHNycGp5a3Z5ZWJ2ZmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MjMzMDUsImV4cCI6MjA2OTE5OTMwNX0.4DftftlUxDxsOnk2YcmPxO2q_aO89oxRl3ePzz6Hx7I";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});