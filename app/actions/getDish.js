import { BASE_URL } from "@/api";
import { revalidatePath } from "next/cache";

export async function getDish(id) {
  const res = await fetch(BASE_URL + `/api/get-dishes/${id}`, {
    cache: "no-store",
  });

  const dish = await res.json();

  revalidatePath("/");
  return dish;
}
