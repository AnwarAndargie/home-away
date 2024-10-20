import { createClient } from "@supabase/supabase-js";

const bucket = "home-away";

const URL = process.env.SUPABASE_URL as string;
const KEY = process.env.SUPABASE_KEY as string;

const supabase = createClient(URL, KEY);

export const uploadImage = async (image: File) => {
  const timestump = Date.now();
  const newName = `${timestump}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });

  if (!data) throw new Error("Image upload faild");

  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
