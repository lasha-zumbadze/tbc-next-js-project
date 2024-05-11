"use client";

import Image from "next/image";

function ProductCart({ product, handleClick }) {
  return (
    <div className="border border-gray-500 rounded-lg relative min-h-80 text-red-600 text-lg flex flex-col items-center gap-8">
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.rating}</p>
      <p>{product.category}</p>
      <button
        className="border boder-gray-500 p-4 rounded-xl"
        onClick={() => handleClick(product.id)}
      >
        ➕ Add to cart
      </button>
      <Image
        src={product.thumbnail}
        alt={product.title}
        fill
        className="-z-10 blur-md"
      />
    </div>
  );
}

export default ProductCart;
