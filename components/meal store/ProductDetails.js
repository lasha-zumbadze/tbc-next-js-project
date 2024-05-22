import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";

function ProductDetails({ product }) {
  return (
    <div className="grid md:grid-cols-2 md:justify-items-center items-center w-4/5 md:py-40 gap-x-8 gap-y-8 shadow-4xl">
      <Image
        className="max-w-full object-cover aspect-[3/1.5] shadow-xl"
        width={600}
        height={500}
        src={product.images[0]}
        alt={product.title}
      />
      <div className="flex flex-col p-4 pl-16 gap-20">
        <h2 className="text-5xl">{product.title}</h2>
        <p className="text-[1.6rem]">{product.description}</p>
        <p className="text-5xl">{product.price}$</p>

        <AddToCartBtn id={product.id} />
      </div>
    </div>
  );
}

export default ProductDetails;
