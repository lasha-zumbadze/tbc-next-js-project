import { BASE_URL } from "@/api";
import { revalidatePath } from "next/cache";

export async function getCartItems() {
  const res = await fetch(BASE_URL + "/api/get-cart-items", {
    cache: "no-store",
  });

  const { carts } = await res.json();

  revalidatePath("/");
  return carts.rows[0].cartitems;
}
