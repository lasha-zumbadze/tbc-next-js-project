"use client";

import { addCartItems } from "@/app/actions/addCartItems";
import { getCartItems } from "@/app/actions/getCartItems";
import { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function initializeCart() {
      const items = await getCartItems();
      setCartItems(items);
    }
    initializeCart();
  }, []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    setCartItems((currItems) => {
      const updatedItems =
        currItems.find((item) => item.id === id) == null
          ? [...currItems, { id, quantity: 1 }]
          : currItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
      addCartItems(updatedItems);
      return updatedItems;
    });
  }

  function decreaseCartQuantity(id) {
    setCartItems((currItems) => {
      const updatedItems =
        currItems.find((item) => item.id === id)?.quantity === 1
          ? currItems.filter((item) => item.id !== id)
          : currItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
      addCartItems(updatedItems);
      return updatedItems;
    });
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      const updatedItems = currItems.filter((item) => item.id !== id);
      addCartItems(updatedItems);
      return updatedItems;
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
