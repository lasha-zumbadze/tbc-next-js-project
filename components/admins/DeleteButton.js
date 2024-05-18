"use client";

import { deleteUser } from "@/app/action";

function DeleteButton({ id, setModal }) {
  return (
    <button
      onClick={() => {
        deleteUser(id);
        setModal("");
      }}
      className="border-none bg-[#ac7e3dd2] text-[2rem] py-[1rem] px-[2rem] text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]"
    >
      Delete
    </button>
  );
}

export default DeleteButton;
