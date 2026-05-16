import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tchbfmlfadrapkaycpdw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjaGJmbWxmYWRyYXBrYXljcGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4ODczMjIsImV4cCI6MjA5NDQ2MzMyMn0.83_sxu41Cg-TgXZj7jROoNL0iHIwxIX4BxVkGjfjAyk'

export const supabase = createClient(supabaseUrl, supabaseKey)