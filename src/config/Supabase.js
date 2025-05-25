import { createClient } from "@supabase/supabase-js";

const ProjectUrl = 'https://hbribgclianbpdwqjnwa.supabase.co'
const ProjectApi = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicmliZ2NsaWFuYnBkd3FqbndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNjQ4MzEsImV4cCI6MjA2Mzc0MDgzMX0.T0AAGcoMIwRh6z2NxYzBiHl9oLle0ucYBfnEeR1VEKc'
export const supabase = createClient(ProjectUrl, ProjectApi)