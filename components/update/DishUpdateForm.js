"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FormForImg } from "../../components/uploads/FormForImg";
import AddToCartBtn from "../meal store/AddToCartBtn";
import { useRouter } from "next/navigation";
import { updateDish } from "@/app/actions/updateDish";
import { FiEdit } from "react-icons/fi";

const DishUpdateForm = ({
  dishTitle,
  dishPrice,
  dishDescription,
  dishIngredients,
  dishCategory,
  dishImg,
  imgInitialNum,
  imageNum,
  id,
}) => {
  const [title, setTitle] = useState(dishTitle);
  const [price, setPrice] = useState(dishPrice);
  const [description, setDescription] = useState(dishDescription);
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState(dishIngredients);
  const [category, setCategory] = useState(dishCategory);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateDish(title, price, category, description, ingredients, dishImg, id);

    setIsModalOpen(false);
    if (imgInitialNum.current < imageNum) imgInitialNum.current = imageNum;

    router.refresh();
  };

  const handleAddIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient("");
    }
  };

  const handleRemoveIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <>
      <button
        onClick={openModal}
        className="bg-[#c8a97e] text-white py-2 px-2 rounded-md hover:bg-[#a9845f] transition duration-300 text-4xl focus:outline-none"
      >
        <FiEdit />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 relative"
            ref={modalRef}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 text-2xl"
            >
              ❌
            </button>
            <div className="grid md:grid-cols-2 justify-center items-center max-w-6xl md:gap-16 gap-y-7 md:gap-y-0">
              <h2 className="text-4xl font-bold mb-6 text-center text-[#c8a97e] col-span-2">
                Edit meal
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-inner shadow-[#c8a97e]">
                <div className="flex flex-col gap-8">
                  <FormForImg />
                  <form onSubmit={handleSubmit} className="text-xl">
                    <div className="mb-4">
                      <label
                        htmlFor="title"
                        className="block text-xl font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border border-[#c8a97e] rounded-md focus:outline-offset-4 focus:outline-[#c8a97e] dark:bg-white dark:text-black"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="price"
                        className="block text-xl font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        step="0.01"
                        required
                        className="mt-1 p-2 w-full border border-[#c8a97e] rounded-md focus:outline-offset-4 focus:outline-[#c8a97e] dark:bg-white dark:text-black"
                      />
                    </div>
                    <div className="mb-4">
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-[#c8a97e] rounded-md py-2 focus:outline-offset-4 focus:outline-[#c8a97e] dark:bg-white dark:text-black"
                        required
                      >
                        <option value="">Select categiry</option>
                        <option>Roll</option>
                        <option>Maki</option>
                        <option>Gunkan</option>
                        <option>Nigiri</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-xl font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="5"
                        required
                        className="mt-1 p-2 w-full border border-[#c8a97e] rounded-md focus:outline-offset-4 focus:outline-[#c8a97e] dark:bg-white dark:text-black"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="ingredient"
                        className="block text-xl font-medium text-gray-700"
                      >
                        Add ingredient
                      </label>
                      <div className="flex items-center mt-1">
                        <input
                          type="text"
                          id="ingredient"
                          name="ingredient"
                          value={ingredient}
                          onChange={(e) => setIngredient(e.target.value)}
                          className="p-2 flex-grow border border-[#c8a97e] rounded-md focus:outline-offset-4 focus:outline-[#c8a97e] mr-2 dark:bg-white dark:text-black"
                        />
                        <button
                          type="button"
                          onClick={handleAddIngredient}
                          className="bg-[#c8a97e] text-white py-2 px-4 rounded-md hover:bg-[#a9845f] transition duration-300 text-xl"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-xl font-medium text-gray-700">
                        Ingredients
                      </label>
                      <ul className="mt-2 flex gap-2 flex-wrap">
                        {ingredients.map((ing, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded-md mb-2 gap-2 text-lg"
                          >
                            {ing}
                            <button
                              type="button"
                              onClick={() => handleRemoveIngredient(index)}
                              className="text-white text-lg rounded-md transition duration-300"
                            >
                              ❌
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#c8a97e] text-white py-2 px-4 rounded-md hover:bg-[#a9845f] transition duration-300 text-2xl"
                      >
                        Edit meal
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:flex flex-col hidden">
                <div className="flex justify-center mb-8">
                  <Image
                    src={dishImg}
                    alt="meal"
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-5xl  text-[#c8a97e] mb-2">{title}</h2>
                  <p className="text-[#c8a97e] text-4xl mb-1">
                    {price && "₾ "}
                    {price}
                  </p>
                </div>
                <div className="mt-4 mb-8">
                  <p className="font-semibold  text-xl text-gray-500">
                    {ingredients.length ? "Ingredients:" : ""}
                  </p>
                  <p className="list-disc list-inside ml-4 text-xl text-gray-500">
                    {ingredients.join(", ")}
                  </p>
                </div>
                <div className="flex min-h-28 justify-end mt-auto">
                  <button className=" px-6 py-3 bg-[#c8a97e] text-white text-2xl font-semibold rounded transition-colors duration-300 hover:bg-white hover:text-[#c8a97e] hover:border-[#c8a97e] border border-[#c8a97e] mt-auto">
                    Order now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DishUpdateForm;
