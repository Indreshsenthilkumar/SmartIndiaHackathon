/**
 * SIXTH SENSE — Node.js Server-Side Supabase Client
 * Handles authenticated database operations, admin queries, and sync.
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

let supabase = null;

if (SUPABASE_URL && SUPABASE_KEY) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log('✅ Supabase Node.js client successfully initialized!');
  } catch (err) {
    console.warn('⚠️ Could not initialize Supabase client:', err.message);
  }
}

export function getSupabaseClient() {
  if (!supabase) {
    return {
      isConfigured: false,
      url: SUPABASE_URL || 'Not configured (using local state)',
      async query(tableName) {
        return { data: [], error: null };
      },
      async insert(tableName, record) {
        return { data: [record], error: null };
      }
    };
  }
  return supabase;
}

export default getSupabaseClient;
