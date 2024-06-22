import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import ShoppingCartBtn from "./meal store/ShoppingCartBtn";
import ThemeSwitcher from "./ThemeSwitcher";
import UserIcon from "./UserIcon";
import NavbarBtn from "./NavbarBtn";
import icon from "../public/fig.svg";
import { getSession } from "@auth0/nextjs-auth0";

function Navigation() {
  const { user } = getSession();

  return (
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
  );
}

export default Navigation;
