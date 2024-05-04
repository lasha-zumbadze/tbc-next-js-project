import styles from "./About.module.css";
import image1 from "../public/images/about-1.png";
import image2 from "../public/images/about-2.png";
import Image from "next/image";

function About() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.info}>
        <div>
          <Image src={image1} alt="cooking" />
        </div>
        <div>
          <Image src={image2} alt="cooking" />
        </div>
      </div>
      <div className={styles.about}>
        <h2 className="font-alexBrush">About us</h2>
        <h3>An Extraordinary Experience</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut
          ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo
          eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.
          Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis.
          Nulla consequat fringilla massa.
        </p>
      </div>
    </section>
  );
}

export default About;
