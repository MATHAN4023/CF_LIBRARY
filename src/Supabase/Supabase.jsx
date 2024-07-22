import { createClient } from "@supabase/supabase-js";
const url = 'https://sgzuuprkaoqjwmuxtymi.supabase.co' // images bucket url
// const url = 'https://klwimflcgntbflidfzvg.supabase.co'
const anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtsd2ltZmxjZ250YmZsaWRmenZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwMjQ2OTIsImV4cCI6MjAzNjYwMDY5Mn0.KFl8n-t8W2oxXoKJvNtjZ3_7JZm4yQlettATDE_c8Vk'
export const supabase = createClient(`${url}`, `${anon_key}`);
