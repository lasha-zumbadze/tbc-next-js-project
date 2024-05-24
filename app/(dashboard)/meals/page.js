import { getProducts } from "@/api";
import StoreItem from "@/components/meal store/StoreItem";

async function Store() {
  const storeItems = await getProducts();

  return (
    <>
      <div className="flex flex-col items-center mt-[6rem] py-8">
        <h1 className="font-alexBrush text-7xl md:text-[5rem] text-[#a68250]">
          The Venue
        </h1>
        <h2 className="text-7xl md:text-[5rem] -mt-8 italic">
          Enjoy our meals
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-y-24 lg:gap-y-32 px-8 w-3/6 md:w-4/6 lg:w-5/6 md:gap-x-72 lg:gap-x-60 m-auto pb-40 pt-28 justify-items-center">
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Store;
