"use client";

import { addCartItems } from "@/app/actions/addCartItems";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

function AddToCartBtn({ id, color }) {
  const { user } = useUser();
  const router = useRouter();

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="flex min-h-28 justify-end mt-auto">
      {quantity === 0 ? (
        <button
          onClick={() => {
            if (!user) return router.push("/api/auth/login");

            increaseCartQuantity(id);
          }}
          className={`px-6 py-3 ${
            color ? "bg-[#b77b2b]" : "bg-[#c8a97e]"
          }  text-white text-2xl font-semibold rounded transition-colors duration-300 hover:bg-white ${
            color ? "hover:text-[#b77b2b]" : "hover:text-[#c8a97e]"
          }  hover:border-[#c8a97e] border border-[#c8a97e] mt-auto`}
        >
          Order now
        </button>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseCartQuantity(id)}
              className={`${
                color ? "bg-[#b77b2b]" : "bg-[#c8a97e]"
              } transition-all w-10 h-10 text-white text-4xl font-semibold flex justify-center items-center rounded-md pb-1 hover:bg-white ${
                color ? "hover:text-[#b77b2b]" : "hover:text-[#c8a97e]"
              } hover:border-[#c8a97e] border border-[#c8a97e]`}
            >
              -
            </button>
            <div className="text-2xl">
              <span className="text-3xl">{quantity}</span> in cart
            </div>
            <button
              onClick={() => increaseCartQuantity(id)}
              className={`${
                color ? "bg-[#b77b2b]" : "bg-[#c8a97e]"
              } transition-all w-10 h-10 text-white text-3xl font-semibold flex justify-center items-center rounded-md pb-1 hover:bg-white ${
                color ? "hover:text-[#b77b2b]" : "hover:text-[#c8a97e]"
              } hover:border-[#c8a97e] border border-[#c8a97e]`}
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => removeFromCart(id)}
              className="text-red-500 text-2xl flex justify-center items-center rounded-md px-3 py-2 mb-3"
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
