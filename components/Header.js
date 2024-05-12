"use client";

import { logout } from "@/app/action";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Link from "next/link";
import ShoppingCartBtn from "./meal store/ShoppingCartBtn";

function Header({ pageClass, title, subtitle, children }) {
  return (
    <header
      className={`bg-cover bg-center bg-no-repeat relative w-full sti ${pageClass}`}
    >
      <nav className={styles.navigation}>
        <Link className={styles.logo} href="/">
          <Logo />
        </Link>
        <ul>
          <Link href="/">Home</Link>
          {/* <li>About us</li> */}
          <Link href="/meals">Meals</Link>
          {/* <li>Delivery</li> */}
          <Link href="/blog">Blog</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contant</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/admin">Admin</Link>
        </ul>
        <div className={styles.reservation}>
          <span>Reservation: </span>+995 123 456 789
        </div>
        <ShoppingCartBtn />
        <button onClick={() => logout()} className={styles.logout}>
          Log out
        </button>
      </nav>
      <div className={styles.title}>
        <h1 className="font-alexBrush">{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
