import CartItem from "@/components/store/CartItem";
import storeItems from "../../../../data/items.json";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utilities/formatCurrency";
import ShoppingItems from "@/components/store/ShoppingItems";

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
