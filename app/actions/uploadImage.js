"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function uploadImage(formData) {
  const imageFile = formData.get("image");
  const blob = await put(imageFile.name, imageFile, {
    access: "public",
  });
  revalidatePath("/");
  return blob;
}
