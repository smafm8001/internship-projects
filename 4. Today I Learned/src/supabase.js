import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qazvrtwmgjxalqsrwxpx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhenZydHdtZ2p4YWxxc3J3eHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NTE1NTEsImV4cCI6MjA1MjUyNzU1MX0.mY7t6oDsHpaUjX6klNftTkzxwlbyX7-k8shLRWOaEQ0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
