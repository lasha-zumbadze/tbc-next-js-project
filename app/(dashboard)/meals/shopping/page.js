import { getProducts } from "@/api";
import ShoppingItems from "@/components/meal store/ShoppingItems";

async function ShoppingItemsPage() {
  const storeItems = await getProducts();

  return <ShoppingItems storeItems={storeItems} />;
}

export default ShoppingItemsPage;
