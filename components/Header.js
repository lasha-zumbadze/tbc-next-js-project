"use client";

import { logout } from "@/app/action";
import Logo from "./Logo";
import Link from "next/link";
import ShoppingCartBtn from "./meal store/ShoppingCartBtn";
import NavbarBtn from "./NavbarBtn";
import ThemeSwitcher from "./ThemeSwitcher";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useUser } from "@auth0/nextjs-auth0/client";
import UserIcon from "./UserIcon";
import Image from "next/image";
import icon from "../public/fig.svg";
import listIcon from "../public/li.svg";
import HoverButton from "./HoverButton";

function Header({ title, subtitle, children }) {
  const { user } = useUser();

  return (
    <header
      className={`bg-cover bg-center bg-no-repeat relative w-full bg-homepage h-screen mt-36`}
    >
      <nav className="text-white py-[1.2rem] px-[10%] lg:px-64 bg-backgroundDarkblue fixed w-full top-0 z-50 flex items-center justify-between h-36">
        <Image
          src={icon}
          className="absolute top-6 left-8 hidden lg:block"
          alt="icon"
        />
        <ul className="hidden lg:flex list-none justify-around w-3/5 text-[1.8rem] font-semibold gap-16">
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] drop-shadow-3xl"
            href="/"
          >
            Home
          </Link>
          {/* <li>About us</li> */}
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] drop-shadow-3xl"
            href="/dishes"
          >
            Dishes
          </Link>
          {/* <li>Delivery</li> */}
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] drop-shadow-3xl"
            href="/blog"
          >
            Blog
          </Link>

          <Link href="/" className="m-auto">
            <Logo />
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
          {/* <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] drop-shadow-3xl"
            href="/profile"
          >
            Profile
          </Link> */}
          <Link
            className="no-underline text-white cursor-pointer transition-all hover:text-[#c8a97e] hover:drop-shadow-3xl"
            href="/admin"
          >
            Admin
          </Link>
        </ul>

        <div className="lg:flex justify-around w-2/12 items-center hidden ml-auto">
          <ShoppingCartBtn />
          <ThemeSwitcher />
          {user ? (
            <UserIcon user={user} />
          ) : (
            <a className="text-white text-3xl" href="/api/auth/login">
              Login
            </a>
          )}
        </div>
        <Image
          src={icon}
          className="absolute top-6 right-8 hidden lg:block"
          alt="icon"
        />
        <div className="lg:hidden">
          <Logo />
        </div>
        <NavbarBtn />
      </nav>
      <div className="w-full text-white text-5xl text-center absolute lg:top-1/4 top-[18%] left-1/2 -translate-x-1/2 drop-shadow-3xl leading-none">
        <h1 className="font-alexBrush text-[#c8a97e] text-[5rem]">{title}</h1>
        <p className="text-8xl mt-4 lg:mt-0 px-4 lg:px-0 leading-[1.2] lg:text-[7rem] italic">
          {subtitle}
        </p>
        <div className="flex gap-12 w-fit m-auto mt-48">
          <Link
            href="#reservation"
            className="text-textGolden hover:text-white transition-all"
          >
            <HoverButton width="60">Online Order</HoverButton>
          </Link>
          <Link
            href={`tel:+995123456789`}
            className="text-textGolden hover:text-white transition-all"
          >
            <HoverButton width="96">
              <span>Call </span>+995 123 456 789
            </HoverButton>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
