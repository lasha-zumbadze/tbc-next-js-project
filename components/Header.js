"use client";

import { logout } from "@/app/action";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Link from "next/link";

function Header({ pageClass, title, subtitle }) {
  return (
    <header
      className={`bg-cover bg-center bg-no-repeat relative w-full ${pageClass}`}
    >
      <nav className={styles.navigation}>
        <Logo />
        <ul>
          <Link href="/">Home</Link>
          <li>About us</li>
          <Link href="/menu">Menu</Link>
          {/* <li>Delivery</li> */}
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contant</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/admin">Admin</Link>
        </ul>
        <div className={styles.reservation}>
          <span>Reservation: </span>+995 123 456 789
        </div>
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
