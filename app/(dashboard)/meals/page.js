import { getProducts } from "@/api";
import StoreItem from "@/components/meal store/StoreItem";

async function Store() {
  const storeItems = await getProducts();

  return (
    <>
      <div className="flex flex-col items-center mt-[6rem]">
        <h1 className="font-alexBrush text-[5rem] text-[#a68250]">The Venue</h1>
        <h2 className="text-[5rem] -mt-[5.5rem] italic">Enjoy our meals</h2>
      </div>
      <div className="grid grid-cols-3 gap-20 px-10 w-4/6 m-auto pb-40 pt-28">
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Store;
