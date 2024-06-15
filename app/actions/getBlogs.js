import { BASE_URL } from "@/api";
import { revalidatePath } from "next/cache";

export async function getBlogs() {
  const res = await fetch(BASE_URL + "/api/get-blogs", { cache: "no-store" });

  const { blogs } = await res.json();

  revalidatePath("/");
  return blogs.rows;
}
