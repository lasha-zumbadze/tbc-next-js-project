"use client";

import CartItem from "@/components/store/CartItem";
import storeItems from "../../../../data/items.json";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utilities/formatCurrency";

function ShoppingItems() {
  const { cartItems } = useShoppingCart();
  const total = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((item) => item.id === cartItem.id);

    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  if (cartItems.length) {
    return (
      <div className="flex flex-col gap-8 w-1/2 m-auto my-20 min-h-screen">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
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
      <h1 className="text-8xl text-center italic min-h-screen pt-20">
        No selected menu
      </h1>
    );
  }
}

export default ShoppingItems;
