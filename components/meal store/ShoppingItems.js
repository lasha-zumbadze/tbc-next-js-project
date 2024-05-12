"use client";

import { useShoppingCart } from "@/context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "@/utilities/formatCurrency";

function ShoppingItems({ storeItems }) {
  const { cartItems } = useShoppingCart();
  const total = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((item) => item.id === cartItem.id);

    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  if (cartItems.length) {
    return (
      <div className="flex flex-col gap-8 w-1/2 m-auto my-20 min-h-screen">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} storeItems={storeItems} />
        ))}
        {cartItems.length > 0 && (
          <div className="text-4xl flex justify-end font-medium">
            Total: {formatCurrency(total)}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <h1 className="text-8xl text-center italic min-h-screen pt-28">
        No selected menu
      </h1>
    );
  }
}

export default ShoppingItems;
