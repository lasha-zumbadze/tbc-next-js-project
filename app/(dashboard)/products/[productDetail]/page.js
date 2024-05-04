import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}

async function Detail({ params }) {
  const { productDetail } = params;
  const product = await getData(productDetail);

  return (
    <>
      <Header pageClass="blogs" title="The Venue" subtitle="Products" />

      <div className="flex justify-center items-center h-screen">
        <ProductDetails product={product} />
      </div>

      <Footer />
    </>
  );
}

export default Detail;
