import { getCartItems } from "@/app/actions/getCartItems";
import { getDishes } from "@/app/actions/getDishes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ShoppingItems from "@/components/meal store/ShoppingItems";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const page = withPageAuthRequired(
  async function ShoppingItemsPage() {
    const storeItems = await getDishes();
    // const storeItems = await getCartItems();

    return (
      <>
        <Header pageClass="menu" title="The Venue" subtitle="Meals" />
        <ShoppingItems storeItems={storeItems} />;
        <Footer />
      </>
    );
  },
  {
    returnTo: "/shopping",
  }
);

export default page;
