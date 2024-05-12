import ShoppingItems from "@/components/meal store/ShoppingItems";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

async function ShoppingItemsPage() {
  const storeItems = await getProducts();

  return <ShoppingItems storeItems={storeItems} />;
}

export default ShoppingItemsPage;
