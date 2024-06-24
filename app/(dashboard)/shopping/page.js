import { getCartItems } from "@/app/actions/getCartItems";
import { getDishes } from "@/app/actions/getDishes";
import Decor from "@/components/Decor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import ShoppingItems from "@/components/meal store/ShoppingItems";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const page = withPageAuthRequired(
  async function ShoppingItemsPage() {
    const storeItems = await getDishes();

    return (
      <div className="flex flex-col justify-center bg-gray-100 relative bg-contactForm bg-no-repeat bg-cover bg-center mt-36">
        <Navigation />
        <main>
          <div className="flex flex-col md:flex-row justify-center mt-32 py-8 items-center gap-8 md:gap-16">
            <Decor />
            <div className="flex items-center flex-col">
              <h1 className="font-alexBrush text-7xl md:text-[5rem] text-[#a68250]">
                KoKeshI
              </h1>
              <h2 className="text-7xl md:text-[5rem] -mt-8 italic text-white text-center">
                CART
              </h2>
            </div>
            <Decor />
          </div>
          <ShoppingItems storeItems={storeItems} />
        </main>
        <Footer />
      </div>
    );
  },
  {
    returnTo: "/shopping",
  }
);

export default page;
