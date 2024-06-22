import { getDishes } from "@/app/actions/getDishes";
import Decor from "@/components/Decor";
import Dishes from "@/components/Dishes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { list } from "@vercel/blob";

async function DishesPage() {
  async function allImages() {
    const blobs = await list();
    return blobs;
  }

  const disheData = await getDishes();
  const dishes = disheData.sort((a, b) => a.id - b.id);

  const imagesData = await allImages();
  const images = imagesData.blobs.sort((a, b) => a.uploadedAt - b.uploadedAt);
  const lastImage = images.pop();

  return (
    <div className="dark:bg-backgroundDarkblue">
      <Header pageClass="menu" title="KoKeshI" subtitle="Dish" />
      <div className="flex justify-center mt-[6rem] mb-16 py-8 items-center gap-16">
        <Decor />
        <div className="flex items-center flex-col">
          <h1 className="font-alexBrush text-7xl md:text-[5rem] text-[#a68250]">
            The Venue
          </h1>
          <h2 className="text-7xl md:text-[5rem] -mt-8 italic dark:text-white">
            Enjoy our meals
          </h2>
        </div>
        <Decor />
      </div>
      <Dishes dishes={dishes} lastImage={lastImage} imageNum={images.length} />
      <Footer />
    </div>
  );
}

export default DishesPage;
