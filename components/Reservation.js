"use client";

import { useRef } from "react";

function Reservation() {
  const dateInputRef = useRef(null);

  const handleDateInputClick = () => {
    dateInputRef.current.showPicker();
  };

  return (
    <section
      id="reservation"
      className="bg-reservation bg-cover bg-center bg-no-repeat h-[60rem] md:h-[50rem] flex flex-col justify-center items-center gap-20"
    >
      <div className="text-center mb-8 leading-tight">
        <h2 className="font-alexBrush text-[#c8a97e] text-7xl font-normal">
          5 Stars
        </h2>
        <h3 className="text-white text-[4rem] lg:text-[5rem] font-normal ">
          Make a Reservation
        </h3>
      </div>
      <div className="flex gap-12 flex-col md:flex-row">
        <input
          type="date"
          ref={dateInputRef}
          onClick={handleDateInputClick}
          className="w-[30rem] md:w-[25rem] h-20 px-8 border-none outline outline-[3px] outline-[#c8a97e] bg-[#c2a49500] text-white text-3xl leading-none font-semibold custom-date-picker cursor-pointer"
        />

        <select className="w-[30rem] md:w-[22rem] h-20 px-8 border-none outline outline-[3px] outline-[#c8a97e] bg-[#c2a49500] text-white text-3xl leading-none font-semibold cursor-pointer">
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
        <select className="w-[30rem] md:w-[22rem] h-20 px-8 border-none outline outline-[3px] outline-[#c8a97e] bg-[#c2a49500] text-white text-3xl leading-none font-semibold cursor-pointer">
          <option className="text-[#555]">Person</option>
          <option className="text-[#555]">1</option>
          <option className="text-[#555]">2</option>
          <option className="text-[#555]">3</option>
          <option className="text-[#555]">4+</option>
        </select>
      </div>
      <button className="w-[30rem] md:w-[25rem] border-none bg-[#c8a97e] px-6 py-6 text-white text-[2rem] cursor-pointer transition-all hover:outline hover:outline-[3px] hover:outline-[#c8a97e] hover:bg-[#c2a49500]">
        Make a Reservation
      </button>
    </section>
  );
}

export default Reservation;
