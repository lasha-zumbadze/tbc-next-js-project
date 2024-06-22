"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import { useRouter } from "next/navigation";
import { FormForImg } from "../uploads/FormForImg";
import { FiEdit } from "react-icons/fi";
import { updateBlog } from "@/app/actions/updateBlog";

const BlogUpdateForm = ({
  blogTitle,
  blogContent,
  blogImg,
  id,
  imgInitialNum,
  imageNum,
}) => {
  const [title, setTitle] = useState(blogTitle);
  const [blog, setBlog] = useState(blogContent);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateBlog(title, blog, blogImg, id);

    setIsModalOpen(false);
    if (imgInitialNum.current < imageNum) imgInitialNum.current = imageNum;

    router.refresh();
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
        className="bg-[#c8a97e] text-white py-2 px-2 rounded-md hover:bg-[#a9845f] transition duration-300 text-4xl"
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
            <div className="grid md:grid-cols-2 justify-center items-center max-w-6xl md:gap-16 gap-y-8">
              <h2 className="text-4xl font-bold mb-6 text-center text-[#c8a97e] col-span-2">
                Edit blog
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
                        className="mt-1 p-2 w-full border border-[#c8a97e] rounded-md focus:ring-[#c8a97e] focus:border-[#c8a97e] dark:bg-white dark:text-black"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-xl font-medium text-gray-700"
                      >
                        Blog
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={blog}
                        onChange={(e) => setBlog(e.target.value)}
                        rows="5"
                        required
                        className="mt-1 p-2 w-full border border-[#c8a97e] rounded-md focus:ring-[#c8a97e] focus:border-[#c8a97e] dark:bg-white dark:text-black"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#c8a97e] text-white py-2 px-4 rounded-md hover:bg-[#a9845f] transition duration-300 text-2xl"
                      >
                        Edit blog
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="p-4 bg-white md:flex flex-col border hidden">
                <div className="flex justify-center mb-8">
                  <Image
                    src={blogImg}
                    alt="blog"
                    width={200}
                    height={200}
                    className="w-full"
                  />
                </div>
                <h2 className="text-4xl md:text-5xl border-b-[3px] border-solid border-[#c4ab9f] w-fit mt-4 mb-4 md:mb-8 pb-4 text-[#303030] break-words">
                  {title}
                </h2>
                <div className="mt-4 mb-8">
                  {blog && (
                    <p className="text-[1.6rem] leading-[1.8] text-[#777] line-clamp-2 break-words">
                      {blog}
                    </p>
                  )}
                </div>
                <button className="border-none outline-2 outline outline-[#c4ab9f] py-4 px-20 rounded-md font-semibold text-[#39322e] text-[1.6rem] tracking-[1px] mt-8 transition-all cursor-pointer bg-[#c4ab9f] shadow-md shadow-[#0000006f] hover:bg-white">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogUpdateForm;
