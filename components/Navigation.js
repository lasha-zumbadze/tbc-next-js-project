import Link from "next/link";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <p>The Venue</p>
        <p>RESTAURANT</p>
      </div>
      <ul>
        <Link href="/">Home</Link>
        <li>About us</li>
        <Link href="/menu">Menu</Link>
        {/* <li>Delivery</li> */}
        <li>Services</li>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contant</Link>
        <Link href="/profile">Profile</Link>
      </ul>
      <div className={styles.reservation}>
        <span>Reservation: </span>+995 123 456 789
      </div>
    </nav>
  );
}

export default Navigation;
