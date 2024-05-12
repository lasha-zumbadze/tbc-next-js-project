import styles from "./MenuOption.module.css";
import Image from "next/image";

function MenuOption({ img, option, meals }) {
  return (
    <div className={styles.menuOption}>
      <Image src={img} alt="meal" />
      <div className={styles.option}>
        <h2>{option}</h2>
        {meals.map((meal, i) => (
          <div className={styles.meals} key={i}>
            <div className={styles.mealName}>
              <h3>{meal.name}</h3>
              <p>${meal.price}</p>
            </div>
            <p className={styles.dishes}>{meal.components.join("/ ")}</p>
            <a className={styles.orderBtn} href="#">
              Order Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuOption;
