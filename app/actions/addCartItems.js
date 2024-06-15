import { BASE_URL } from "@/api";

export async function addCartItems(cartItems) {
  const userData = {
    cartItems: cartItems,
  };

  await fetch(`${BASE_URL}/api/add-cart-items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}
