import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Products from "@/components/Products";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

async function Blogs() {
  const products = await getProducts();

  return (
    <>
      <Header pageClass="blogs" title="The Venue" subtitle="Products" />

      <main>
        <Products products={products} />
      </main>

      <Footer />
    </>
  );
}

export default Blogs;
