import { useShoppingCart } from "@/context/ShoppingCartContext";
import storeItems from "../../data/items.json";
import Image from "next/image";
import { formatCurrency } from "@/utilities/formatCurrency";

function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);

  if (item === null) return null;

  return (
    <>
      <div className="flex items-center shadow-md shadow-slate-400 rounded-md overflow-hidden">
        <Image
          src={item.imgUrl}
          alt={item.name}
          style={{ objectFit: "cover", aspectRatio: "3/1.5" }}
          width={300}
          height={300}
        />
        <div className="w-full flex items-center justify-between px-5">
          <div className="flex flex-col gap-3">
            <div className="text-4xl flex gap-3 items-center">
              {item.name}
              {quantity > 1 && (
                <span className="text-3xl text-gray-500">x{quantity}</span>
              )}
            </div>
            <div className="text-gray-500 text-3xl">
              {formatCurrency(item.price)}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-3xl">
              {formatCurrency(item.price * quantity)}
            </div>
            <button
              className="text-red-400 border px-4 py-2 text-2xl font-medium"
              onClick={() => removeFromCart(item.id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
