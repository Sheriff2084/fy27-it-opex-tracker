// ──────────────────────────────────────────────────────────────────────────
//  COPY THIS FILE TO config.js AND FILL IN YOUR SUPABASE VALUES
//  (You only need to do this once — see SETUP.md for instructions)
// ──────────────────────────────────────────────────────────────────────────
var SUPABASE_URL      = 'https://hsouvlxlfntfkpsdjgdl.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhzb3V2bHhsZm50Zmtwc2RqZ2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5OTM0MjEsImV4cCI6MjA5OTU2OTQyMX0.j8cMvC8mwFFfmf5mufmgSrtn7-MKczDLoaLvroyHUWk';

// Only these email domains may sign in / see data.
var ALLOWED_EMAIL_DOMAINS = ['@allegrofunds.com.au', '@fantasticfurniture.com.au'];

var db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
