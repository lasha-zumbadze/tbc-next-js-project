import { getDish } from "@/app/actions/getDish";
import Footer from "@/components/Footer";
import DishDetails from "@/components/meal store/DishDetails";
import { FaArrowLeftLong } from "react-icons/fa6";

import Link from "next/link";
import Navigation from "@/components/Navigation";

async function DishDetail({ params }) {
  const { id } = params;
  const dish = await getDish(id);

  return (
    <>
      <Navigation />

      <div className="flex flex-col justify-center bg-gray-100 relative bg-contactForm bg-no-repeat bg-cover bg-center mt-36">
        <div className="flex justify-center items-center gap-4 self-start text-4xl absolute top-24 left-24 border-b-2 border-[#c8a97e] pb-2 text-white">
          <FaArrowLeftLong />
          <Link href="/dishes">Go back</Link>
        </div>
        <DishDetails dish={dish} />
      </div>
      <Footer />
    </>
  );
}

export default DishDetail;
