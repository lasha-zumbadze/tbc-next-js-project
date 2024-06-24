import { useShoppingCart } from "@/context/ShoppingCartContext";
import Image from "next/image";
import { formatCurrency } from "@/utilities/formatCurrency";

function CartItem({ id, quantity, storeItems }) {
  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } =
    useShoppingCart();
  const item = storeItems.find((item) => item.id === id);

  if (item === null) return null;

  return (
    <>
      <div className="flex items-center rounded-md border-[1px] border-textGolden overflow-hidden bg-[#293441]">
        <div className="w-[40rem] aspect-[3/1.7] relative">
          <Image
            src={item.imgurl}
            alt={item.title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full flex items-center justify-between px-8">
          <div className="flex flex-col gap-3">
            <div className="text-5xl flex gap-3 items-center text-textGolden w-[28rem]">
              {item.title}
              {quantity > 1 && (
                <span className="text-4xl text-gray-300">x{quantity}</span>
              )}
            </div>
            <div className="text-gray-300 text-3xl">
              {formatCurrency(item.price)}
            </div>
          </div>

          <div className="flex items-center justify-between gap-8 w-52">
            <button
              onClick={() => decreaseCartQuantity(id)}
              className="bg-[#c8a97e]
              transition-all w-10 h-10 text-white text-4xl font-semibold flex justify-center items-center rounded-md pb-1 hover:bg-white hover:text-[#c8a97e] hover:border-[#c8a97e] border border-[#c8a97e]"
            >
              -
            </button>
            <div className="text-2xl text-white">
              <span className="text-3xl">{quantity}</span>
            </div>
            <button
              onClick={() => increaseCartQuantity(id)}
              className="bg-[#c8a97e]
              transition-all w-10 h-10 text-white text-3xl font-semibold flex justify-center items-center rounded-md pb-1 hover:bg-white hover:text-[#c8a97e] hover:border-[#c8a97e] border border-[#c8a97e]"
            >
              +
            </button>
          </div>

          <div className="flex gap-8 items-center">
            <div className="text-4xl text-gray-300 w-36">
              {formatCurrency(item.price * quantity)}
            </div>
            <button
              className="text-textGolden px-4 pb-6 text-7xl font-normal"
              onClick={() => removeFromCart(item.id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
