"use client";

import { useState } from "react";
import styles from "./NavbarBtn.module.css";
import Link from "next/link";
import ShoppingCartBtn from "./meal store/ShoppingCartBtn";
import ThemeSwitcher from "./ThemeSwitcher";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { logout } from "@/app/action";

const linkArr = [
  "home",
  "meals",
  "blog",
  "menu",
  "contact",
  "profile",
  "admin",
];

function NavbarBtn() {
  const [isActive, setIsActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleButton = () => {
    setIsActive((prev) => !prev);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div
        className="flex items-center cursor-pointer text-4xl z-10 ml-auto lg:hidden w-fit"
        onClick={toggleButton}
      >
        <p className="font-semibold">MENU</p>
        <div className={`${styles.toggle} ${isActive ? styles.active : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div>
        <div className={`${styles.menu} ${isActive ? styles.menuVisible : ""}`}>
          <ul
            className={`bg-[#c79c60] absolute top-0 right-0 h-screen ${
              isActive ? "w-full" : "w-0"
            } overflow-hidden flex flex-col justify-center items-center text-5xl font-semibold pt-12`}
          >
            <div className="flex gap-4 w-2/5 justify-around mb-20 items-center">
              <ShoppingCartBtn />
              <ThemeSwitcher />
              <button
                onClick={() => logout()}
                className="transition-all font-bold text-4xl  hover:drop-shadow-3xl"
              >
                <RiLogoutCircleRLine />
              </button>
            </div>
            {linkArr.map((l, i) => (
              <Link
                key={i}
                href={i === 0 ? "/" : `/${l}`}
                onClick={() => setIsActive(false)}
                className={`no-underline text-white cursor-pointer transition-all drop-shadow-3xl py-4 ${
                  hoveredIndex !== null && hoveredIndex !== i
                    ? styles.dimmed
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </Link>
            ))}
            <div className="border-solid border-white border-[2px] text-2xl w-[28rem] text-center font-bold px-8 py-10 mt-20">
              <span>Reservation: </span>+995 123 456 789
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarBtn;
