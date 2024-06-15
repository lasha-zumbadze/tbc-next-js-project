import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";

function DishDetails({ dish }) {
  return (
    <div className="grid md:grid-cols-2  w-4/5 md:py-20 gap-x-8 gap-y-8 bg-[#f3c58493] shadow-2xl rounded-lg p-6">
      <div className="w-full aspect-[3/1.5] shadow-xl relative">
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={dish.imgurl}
          alt={dish.title}
        />
      </div>
      <div className="flex flex-col p-4 gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-6xl font-bold text-[#b77b2b]">{dish.title}</h2>
          <p className="text-5xl font-semibold text-[#b77b2b]">
            {dish.price} ₾
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          {dish.ingredients.map((ingredient, i) => (
            <div
              className="px-4 py-2 bg-[#fef8ef] text-2xl rounded-ss-3xl rounded-ee-3xl"
              key={i}
            >
              {ingredient}
            </div>
          ))}
        </div>
        <div className="border-solid w-2/3 text-justify p-8 rounded-ss-3xl rounded-ee-3xl bg-[#fef8ef]">
          <p className="text-2xl text-gray-600">{dish.description}</p>
        </div>

        <AddToCartBtn color={true} id={dish.id} />
      </div>
    </div>
  );
}

export default DishDetails;
