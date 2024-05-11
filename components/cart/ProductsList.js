"use client";

import { useLocalStorage } from "@/hooks";
import Cart from "./Cart";
import ProductCart from "./ProductCart";

function ProductsList({ products }) {
  const [value, setValue] = useLocalStorage("cart", []);

  function handleClick(productId) {
    console.log(productId);
  }
  return (
    <>
      <Cart className="w-8 h-8 absolute right-5 top-5 cursor-pointer" />
      <section className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </section>
    </>
  );
}

export default ProductsList;
