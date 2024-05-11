"use client";

import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utilities/formatCurrency";
import Image from "next/image";

function StoreItem({ id, title, price, images }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className=" shadow-slate-400 shadow-lg rounded-xl overflow-hidden">
      <Image
        style={{
          objectFit: "cover",
          aspectRatio: "3/1.5",
          boxShadow: "0 0 1px black",
        }}
        width={500}
        height={500}
        src={images[0]}
        alt={title}
      />
      <div>
        <div className="flex justify-between px-6 mt-8 h-40">
          <p className="text-4xl w-80">{title}</p>
          <p className="text-3xl text-gray-500 ml-4">{formatCurrency(price)}</p>
        </div>
        <div className="flex justify-center">
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className="bg-blue-500 text-white rounded-lg py-3 w-2/3 mb-16 text-3xl"
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
      </div>
    </div>
  );
}

export default StoreItem;
