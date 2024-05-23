"use client";

import { logout } from "@/app/action";
import Logo from "./Logo";
import Link from "next/link";
import ShoppingCartBtn from "./meal store/ShoppingCartBtn";
import NavbarBtn from "./NavbarBtn";
import ThemeSwitcher from "./ThemeSwitcher";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Header({ pageClass, title, subtitle, children }) {
  return (
    <header
      className={`bg-cover bg-center bg-no-repeat relative w-full sti ${pageClass}`}
    >
      <nav className="text-white py-[1.2rem] px-[10%] lg:px-52 bg-gradient-to-b from-[#4e340f] to-[#1f1405] fixed w-full top-0 z-10 flex items-center gap-8">
        <Link href="/">
          <Logo />
        </Link>

        <ul className="hidden lg:flex list-none justify-around w-[45%] text-[1.8rem] -tracking-[1px] font-bold mr-8">
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] drop-shadow-3xl"
            href="/"
          >
            Home
          </Link>
          {/* <li>About us</li> */}
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] drop-shadow-3xl"
            href="/meals"
          >
            Meals
          </Link>
          {/* <li>Delivery</li> */}
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] drop-shadow-3xl"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] drop-shadow-3xl"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] drop-shadow-3xl"
            href="/contact"
          >
            Contant
          </Link>
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] drop-shadow-3xl"
            href="/profile"
          >
            Profile
          </Link>
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] hover:drop-shadow-3xl"
            href="/admin"
          >
            Admin
          </Link>
        </ul>

        <div className="border-solid border-white border-[2px] text-2xl font-bold px-4 py-6 lg:block hidden w-3/12">
          <span>Reservation: </span>+995 123 456 789
        </div>

        <div className="lg:flex justify-around w-2/12 items-center hidden">
          <ShoppingCartBtn />
          <ThemeSwitcher />
          <button
            onClick={() => logout()}
            className="transition-all font-bold text-4xl hover:text-[#c8a97e] hover:drop-shadow-3xl"
          >
            <RiLogoutCircleRLine />
          </button>
        </div>

        <NavbarBtn />
      </nav>
      <div className="-mt-8 w-full text-white text-5xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 drop-shadow-3xl leading-none">
        <h1 className="font-alexBrush text-[#c8a97e] text-[5rem]">{title}</h1>
        <p className="text-[7rem] italic">{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
