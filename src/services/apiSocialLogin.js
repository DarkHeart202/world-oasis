import supabase from "./supabase";

export async function loginWithSocialMedia(providerName) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: providerName,
    options: {
      redirectTo: "/",
    },
  });
  if (error) throw new Error(error.message);
  return data;
}
