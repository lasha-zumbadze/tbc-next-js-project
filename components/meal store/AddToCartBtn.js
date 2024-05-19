"use client";

import { useShoppingCart } from "@/context/ShoppingCartContext";

function AddToCartBtn({ id }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="flex justify-center min-h-28">
      {quantity === 0 ? (
        <button
          onClick={() => increaseCartQuantity(id)}
          className="bg-blue-500 text-white rounded-lg py-3 w-2/3 mb-12 text-3xl"
        >
          + Add To Cart
        </button>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseCartQuantity(id)}
              className="bg-blue-500 w-10 h-10 text-white text-4xl flex justify-center items-center rounded-md pb-1"
            >
              -
            </button>
            <div className="text-2xl">
              <span className="text-3xl">{quantity}</span> in cart
            </div>
            <button
              onClick={() => increaseCartQuantity(id)}
              className="bg-blue-500 w-10 h-10 text-white text-3xl flex justify-center items-center rounded-md pb-1"
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => removeFromCart(id)}
              className="bg-red-500 text-white text-2xl flex justify-center items-center rounded-md px-3 py-2 mb-3"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCartBtn;
