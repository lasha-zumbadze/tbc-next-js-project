import { BASE_URL } from "@/api";
import { revalidatePath } from "next/cache";

export async function getDishes() {
  const res = await fetch(BASE_URL + "/api/get-dishes", { cache: "no-store" });

  const { dishes } = await res.json();

  revalidatePath("/");
  return dishes.rows;
}
