import supabase from "./supabase";

export async function loginWithSocialMedia(providerName) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: providerName,
    options: {
      redirectTo: window.location.origin,
    },
  });
  if (error) throw new Error(error.message);
  return data;
}
