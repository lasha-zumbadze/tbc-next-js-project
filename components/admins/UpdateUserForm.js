"use client";

import { updateUser } from "@/app/action";
import { useState } from "react";

function UpdateUserForm({ id, user, setModal }) {
  const userName = user.name;
  const userEmail = user.email;
  const userAge = user.age;

  const [name, setName] = useState(userName || "");
  const [email, setEmail] = useState(userEmail || "");
  const [age, setAge] = useState(userAge || "");

  return (
    <form
      action={() => {
        updateUser(id, name, email, age);
        setModal("");
      }}
      className="bg-[#c8a97e2b] w-[35rem] flex flex-col gap-8 justify-center items-center rounded-2xl pt-20 px-20 pb-12 shadow-5xl m-8"
    >
      <input
        type="text"
        placeholder="User name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full h-16 text-[1.6rem] pl-6 rounded-2xl shadow-input text-[#5a390a] focus:outline focus:outline-[3px] focus:outline-[#c8a97ef4] focus:outline-offset-[5px]"
      />
      <input
        type="email"
        placeholder="User email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-16 text-[1.6rem] pl-6 rounded-2xl shadow-input text-[#5a390a] focus:outline focus:outline-[3px] focus:outline-[#c8a97ef4] focus:outline-offset-[5px]"
      />
      <input
        type="number"
        placeholder="User age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full h-16 text-[1.6rem] pl-6 rounded-2xl shadow-input text-[#5a390a] focus:outline focus:outline-[3px] focus:outline-[#c8a97ef4] focus:outline-offset-[5px]"
      />
      <div className="flex gap-14 mt-8">
        <button
          type="submit"
          className="border-none bg-[#ac7e3dd2] text-[2rem] px-8 py-4 text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]"
        >
          Save
        </button>

        <button
          onClick={() => setModal("")}
          type="button"
          className="border-none bg-[#ac7e3dd2] text-[2rem] px-8 text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UpdateUserForm;
