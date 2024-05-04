import styles from "./Footer.module.css";
import Logo from "./Logo";
import Reservation from "./Reservation";

function Footer() {
  return (
    <footer>
      <Reservation />
      <div className={styles.footer}>
        <div>
          <Logo titleFont={5} subtitleFont={2} letterSpace={1} />
          <div className={styles.terms}>
            <p>Copyright &#169; 2024 All rights reserved.</p>
            <p className={styles.termsConditions}>Terms and Conditions</p>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>481 Creekside Lane Avila CA 93424</p>
          <p>+995 123 456 789</p>
          <p>example@gmail.com</p>
        </div>
        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <input type="email" placeholder="Enter email address" />
          <button className={styles.subscribe}>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
