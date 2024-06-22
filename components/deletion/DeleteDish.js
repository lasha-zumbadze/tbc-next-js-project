"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteDish } from "@/app/actions/deleteDish";
import { useShoppingCart } from "@/context/ShoppingCartContext";

const DeleteDish = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { removeFromCart } = useShoppingCart();

  const modalRef = useRef(null);
  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
    removeFromCart(id);
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
        className="bg-[#c8a97e] text-white py-2 px-2 rounded-md hover:bg-[#a9845f] transition duration-300 text-4xl"
      >
        <RiDeleteBin6Line />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg p-4 pb-8 md:p-8 w-3/4 text-center md:w-fit relative"
            ref={modalRef}
          >
            <p className="text-4xl text-[#8d5722] mb-16 p-8">
              Are you sure you want to delete the dish?
            </p>
            <div className="flex justify-around">
              <button
                onClick={closeModal}
                type="button"
                className="border-none bg-[#ac7e3dd2] text-[2rem] py-[1rem] px-[2rem] text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteDish(id);
                  router.refresh();
                  closeModal();
                }}
                className="border-none bg-[#ac7e3dd2] text-[2rem] py-[1rem] px-[2rem] text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteDish;
