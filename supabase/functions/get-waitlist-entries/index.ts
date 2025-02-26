
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.31.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Create Supabase client using environment variables
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get the last sync timestamp from the request (if provided)
    const url = new URL(req.url);
    const lastSyncTime = url.searchParams.get('lastSyncTime');

    // Query waitlist entries
    let query = supabaseClient
      .from('waitlist_entries')
      .select('*');

    // If lastSyncTime is provided, only get entries after that timestamp
    if (lastSyncTime) {
      query = query.gt('created_at', lastSyncTime);
    }

    const { data, error } = await query.order('created_at', { ascending: true });

    if (error) throw error;

    return new Response(
      JSON.stringify({ data }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 200,
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 400,
      }
    );
  }
});
