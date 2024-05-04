import styles from "./MenuItem.module.css";
import Image from "next/image";

function MenuItem({ img, title, price, ingredients }) {
  return (
    <div className={styles.menuItem}>
      <Image src={img} alt="meal" />
      <div className={styles.meal}>
        <div className={styles.mealTitle}>
          <h4>{title.map((title) => title).join("\r\n")}</h4>
          <p className={styles.price}>${price}</p>
        </div>
        <p className={styles.ingredients}>
          {ingredients.map((element) => element).join(", ")}
        </p>
        <button className={styles.orderMeal}>Order now</button>
      </div>
    </div>
  );
}

export default MenuItem;
