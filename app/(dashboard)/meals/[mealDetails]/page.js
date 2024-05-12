import ProductDetails from "@/components/meal store/ProductDetails";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}

async function Detail({ params }) {
  const { mealDetails } = params;
  const product = await getData(mealDetails);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <ProductDetails product={product} />
      </div>
    </>
  );
}

export default Detail;
