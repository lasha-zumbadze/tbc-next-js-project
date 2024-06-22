"use client";

import Image from "next/image";
import AddToCartBtn from "./meal store/AddToCartBtn";
import Pagination from "./Pagination";
import { useRef, useState } from "react";
import { MdSort } from "react-icons/md";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoArrowRedoSharp } from "react-icons/io5";

import DishUploadForm from "./uploads/DishForm";
import Link from "next/link";
import DishUpdateForm from "./update/DishUpdateForm";
import { deleteDish } from "@/app/actions/deleteDish";
import { useRouter } from "next/navigation";
import DeleteDish from "./deletion/DeleteDish";
import HalfRating from "./Raiting";

function Dishes({ dishes, lastImage, imageNum }) {
  const [curPage, setCurrPage] = useState(1);
  const [sortPriceUp, setSortPriceUp] = useState(false);
  const [sortPriceDown, setSortPriceDown] = useState(false);
  const [category, setCategory] = useState("");
  const [sortMenu, setSortMenu] = useState(false);
  const [rating, setRating] = useState(0);
  const imgInitialNum = useRef(imageNum);
  const router = useRouter();

  const resultsPerPage = 8;
  const start = (curPage - 1) * resultsPerPage;
  const end = curPage * resultsPerPage;
  const pageNum = Math.ceil(dishes.length / resultsPerPage || 1);

  const sortPriceAscending = dishes.slice().sort((a, b) => a.price - b.price);

  const sortPriceDescending = dishes.slice().sort((a, b) => b.price - a.price);

  const filterByCategory = dishes
    .slice()
    .filter((dish) => dish.category === category);

  const sortPriceUpCategory = filterByCategory
    .slice()
    .sort((a, b) => a.price - b.price);

  const sortPriceDownCategory = filterByCategory
    .slice()
    .sort((a, b) => b.price - a.price);

  let dishesData;

  if (sortPriceUp && !category) dishesData = sortPriceAscending;
  else if (sortPriceDown && !category) dishesData = sortPriceDescending;
  else if (category && !sortPriceDown && !sortPriceUp)
    dishesData = filterByCategory;
  else if (category && sortPriceUp) dishesData = sortPriceUpCategory;
  else if (category && sortPriceDown) dishesData = sortPriceDownCategory;
  else dishesData = dishes;

  return (
    <div className="p-16 pb-44 bg-gray-50 min-h-screen flex flex-col gap-16 dark:bg-[#293441]">
      <div className="flex justify-between items-center">
        <div>
          <div
            className="w-44 h-16 bg-white outline outline-[#c8a97e] rounded-md flex justify-around items-center text-3xl cursor-pointer text-[#937140] relative"
            onClick={() => setSortMenu((ex) => !ex)}
          >
            <span>Sort</span>
            <MdSort />
          </div>
          <div
            className={`${
              sortMenu ? "h-64" : "h-0"
            } w-[30rem] transition-all flex items-center overflow-hidden bg-white rounded-md absolute shadow-inner shadow-[#bb813061] text-[#937140] text-3xl z-10`}
          >
            <ul className="px-6 py-4 flex flex-col gap-8">
              <li className="flex items-center gap-4">
                Price:{" "}
                <HiSortAscending
                  className={`cursor-pointer ${
                    sortPriceUp && "bg-[#c8a97e] rounded-md text-white"
                  }`}
                  onClick={() => {
                    setSortPriceUp((ex) => !ex);
                    setSortPriceDown(false);
                  }}
                />{" "}
                <HiSortDescending
                  className={`cursor-pointer ${
                    sortPriceDown && "bg-[#c8a97e] rounded-md text-white"
                  }`}
                  onClick={() => {
                    setSortPriceDown((ex) => !ex);
                    setSortPriceUp(false);
                  }}
                />
              </li>
              <li className="flex gap-8 justify-between items-center">
                Category:
                <select
                  className="border-solid border-2 border-[#c8a97e] dark:bg-white"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select categiry</option>
                  <option>Gunkan & Nigiri</option>
                  <option>Rice & Noodles</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <DishUploadForm imgUrl={lastImage?.url} />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 px-16 sm:px-48 md:px-0 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-14">
          {dishesData
            .map((dish) => (
              <div
                key={dish.id}
                className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col dark:bg-gray-100"
              >
                <div className="flex justify-between mb-4">
                  <DishUpdateForm
                    dishTitle={dish.title}
                    dishPrice={dish.price}
                    dishDescription={dish.description}
                    dishIngredients={dish.ingredients}
                    dishCategory={dish.category}
                    dishImg={
                      imageNum > imgInitialNum.current
                        ? lastImage.url
                        : dish.imgurl
                    }
                    imgInitialNum={imgInitialNum}
                    imageNum={imageNum}
                    id={dish.id}
                  />
                  <DeleteDish id={dish.id} />
                </div>
                <div className="flex justify-center mb-8">
                  <div className="w-full aspect-[3/2] relative">
                    <Image
                      src={dish.imgurl}
                      alt={dish.title}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/dishes/${dish.id}`}
                    className="flex items-center gap-3"
                  >
                    <h2 className="text-5xl  text-[#c8a97e] mb-2">
                      {dish.title}
                    </h2>
                    <IoArrowRedoSharp className="text-4xl text-textGolden w-full" />
                  </Link>
                  <p className="text-[#c8a97e] text-4xl mb-1">₾ {dish.price}</p>
                </div>
                <div className="mt-4 mb-8">
                  <p className="font-semibold  text-xl text-gray-500">
                    {dish.ingredients.length ? "Ingredients:" : ""}
                  </p>
                  <p className="list-disc list-inside ml-4 text-xl text-gray-500">
                    {dish.ingredients.join(", ")}
                  </p>
                </div>
                <HalfRating rating={rating} setRating={setRating} />
                <AddToCartBtn id={dish.id} />
              </div>
            ))
            .slice(start, end)}
        </div>

        {dishes.length > resultsPerPage && (
          <Pagination
            pageNum={pageNum}
            setCurrPage={setCurrPage}
            curPage={curPage}
          />
        )}
      </div>
    </div>
  );
}

export default Dishes;
