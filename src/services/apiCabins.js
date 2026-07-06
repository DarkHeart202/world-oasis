// cSpell:disable
import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabin() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("There was a problem loading all the cabins");
  }
  return data;
}
//lgdvudhfxmartidklwke.supabase.co/storage/v1/object/public/cabin-pages/cabin-001.jpg
export async function createEditCabin(newCabin, id) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imagePath = hasImagePath
    ? newCabin?.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-pages/${imageName}`;

  let query = supabase.from("cabins");

  // 1-Create CABIN
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // 2-Update Cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("There was a problem Editings the cabin");
  }
  if (hasImagePath) return data;
  // 2-Upload Image
  const { error: storageError } = await supabase.storage
    .from("cabin-pages")
    .upload(imageName, newCabin.image);

  // 3-Delete Cabin if there error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("There was a problem deleting the cabin");
  }
  return data;
}
