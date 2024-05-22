import { formatCurrency } from "@/utilities/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";

function StoreItem({ id, title, price, images }) {
  return (
    <div className=" shadow-slate-400 shadow-lg rounded-xl overflow-hidden w-[29rem] h-[38rem] flex flex-col gap-y-8 hover:scale-105 transition-all">
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
      <div className="h-full mt-auto flex flex-col gap-y-10">
        <div className="flex justify-between px-6 h-40">
          <Link href={`/meals/${id}`}>
            <p className="text-4xl hover:underline w-fit">{title}</p>
          </Link>
          <p className="text-3xl text-gray-500 ml-4">{formatCurrency(price)}</p>
        </div>

        <AddToCartBtn id={id} />
      </div>
    </div>
  );
}

export default StoreItem;
