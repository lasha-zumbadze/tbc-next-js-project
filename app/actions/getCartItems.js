import { BASE_URL } from "@/api";

export async function getCartItems() {
  const res = await fetch(BASE_URL + "/api/get-cart-items", {
    cache: "no-store",
  });

  const { carts } = await res.json();

  return carts && carts.rows[0].cartitems.length > 0
    ? carts.rows[0].cartitems
    : [];
}
