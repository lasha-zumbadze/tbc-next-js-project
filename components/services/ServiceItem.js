import styles from "./ServiceItem.module.css";
import Image from "next/image";

function ServiceItem({ icon, title, context }) {
  return (
    <div className={styles.service}>
      <Image src={icon} alt="icon" />
      <h3>{title}</h3>
      <p>{context}</p>
    </div>
  );
}

export default ServiceItem;
