import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Get posts from the database
const getPosts = async (payload?: { limit?: number; offset?: number }) => {
  const { limit = 10, offset = 0 } = payload || {};
  // request and catch error
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .range(offset, offset + limit - 1);
  if (error) {
    throw error;
  }
  return data || [];
};

export { getPosts };
