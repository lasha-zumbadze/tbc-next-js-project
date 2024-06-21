"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import HoverButton from "./HoverButton";

function Reservation() {
  const { user } = useUser();
  const router = useRouter();
  const dateInputRef = useRef(null);

  const handleDateInputClick = () => {
    dateInputRef.current.showPicker();
  };

  return (
    <section
      id="reservation"
      className="bg-reservation bg-cover bg-center bg-no-repeat h-[80rem] md:h-[60rem] flex flex-col justify-center items-center gap-20"
    >
      <div className="text-center mb-8 leading-tight">
        <h2 className="font-alexBrush text-[#c8a97e] text-7xl font-normal">
          5 Stars
        </h2>
        <h3 className="text-white text-[4rem] lg:text-[5rem] font-normal ">
          Make a Reservation
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 justify-items-center">
        <input
          type="date"
          ref={dateInputRef}
          onClick={handleDateInputClick}
          className="w-[30rem] md:w-[25rem] h-20 px-8 border-none outline outline-[3px] outline-[#c8a97e] bg-[#c2a49500] text-white text-3xl leading-none font-semibold custom-date-picker cursor-pointer"
        />

        <select className="w-[30rem] md:w-[25rem] h-20 px-8 border-none outline outline-[3px] outline-[#c8a97e] bg-[#c2a49500] text-white text-3xl leading-none font-semibold cursor-pointer">
          <option className="text-[#555]">Time</option>
          <option className="text-[#555]">10:00 AM</option>
          <option className="text-[#555]">11:00 AM</option>
          <option className="text-[#555]">12:00 PM</option>
          <option className="text-[#555]">01:00 PM</option>
          <option className="text-[#555]">02:00 PM</option>
          <option className="text-[#555]">03:00 PM</option>
          <option className="text-[#555]">04:00 PM</option>
          <option className="text-[#555]">05:00 PM</option>
          <option className="text-[#555]">06:00 PM</option>
          <option className="text-[#555]">07:00 PM</option>
          <option className="text-[#555]">08:00 PM</option>
          <option className="text-[#555]">09:00 PM</option>
          <option className="text-[#555]">10:00 PM</option>
        </select>
        <select className="w-[30rem] md:w-[25rem] h-20 px-8 border-none outline outline-[3px] outline-[#c8a97e] bg-[#c2a49500] text-white text-3xl leading-none font-semibold cursor-pointer">
          <option className="text-[#555]">Person</option>
          <option className="text-[#555]">1</option>
          <option className="text-[#555]">2</option>
          <option className="text-[#555]">3</option>
          <option className="text-[#555]">4+</option>
        </select>
        <textarea
          className="w-full md:w-4/5 md:col-span-3 h-40 px-8 border-none outline outline-[3px] outline-[#c8a97e] bg-[#c2a49500] text-white text-3xl leading-none font-semibold pt-4 placeholder:text-white"
          placeholder="Your comment"
        ></textarea>
      </div>
      <button
        onClick={() => {
          if (!user) return router.push("/api/auth/login");
        }}
        className="hover:text-white text-textGolden transition-all"
      >
        <HoverButton width={96}>Submit</HoverButton>
      </button>
    </section>
  );
}

export default Reservation;
