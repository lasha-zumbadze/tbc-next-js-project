import styles from "./Contact.module.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Logo from "../../../components/Logo";
import facebookIcon from "../../../public/images/facebook-icon.png";
import instagramIcon from "../../../public/images/instagram-icon.png";
import twitterIcon from "../../../public/images/twitter-icon.png";
import linkedinIcon from "../../../public/images/linkedin-icon.png";
import Image from "next/image";

function Contact() {
  return (
    <>
      <Header pageClass="contact" title="The Venue" subtitle="Contact" />
      <main>
        <div className={styles.contactInfo}>
          <h2>Contact info</h2>
          <p className={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti.
          </p>
          <Logo titleFont={5} subtitleFont={2} letterSpace={1} />
          <div className={styles.contactBox}>
            <p>
              <span>Address:</span> 481 Creekside Lane Avila CA 93424
            </p>
            <p>
              <span>Phone:</span> +995 123 456 789
            </p>
            <p>
              <span>Email:</span> example@gmail.com
            </p>
            <div className={styles.socialIcons}>
              <Image src={facebookIcon} alt="facebook" />
              <Image src={instagramIcon} alt="instagram" />
              <Image src={twitterIcon} alt="twitter" />
              <Image src={linkedinIcon} alt="linkedin" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
