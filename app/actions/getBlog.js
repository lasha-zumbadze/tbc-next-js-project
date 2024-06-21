import { BASE_URL } from "@/api";
import { revalidatePath } from "next/cache";

export async function getBlog(id) {
  const res = await fetch(BASE_URL + `/api/get-blogs/${id}`, {
    cache: "no-store",
  });

  const blog = await res.json();

  revalidatePath("/");
  return blog;
}
