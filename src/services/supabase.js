// cSpell:disable
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lgdvudhfxmartidklwke.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnZHZ1ZGhmeG1hcnRpZGtsd2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MTU4OTEsImV4cCI6MjA5NjQ5MTg5MX0.6dj0U4U2bFCuG2Yvenawg4MNMbULSW5uUUowMU0gcKw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
