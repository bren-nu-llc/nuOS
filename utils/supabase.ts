
import { createClient } from '@supabase/supabase-js'

        
const supabaseUrl = "https://jlqjzpluesgsynqxangr.supabase.co"
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpscWp6cGx1ZXNnc3lucXhhbmdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3OTQ2NzAsImV4cCI6MjA1NDM3MDY3MH0.cMVs2En_xAjV1UZ7CHconz2AG57gl0oGHrI479GCxYA'

export const supabase = createClient(supabaseUrl, supabaseKey);
        