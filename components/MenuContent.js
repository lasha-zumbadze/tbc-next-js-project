import styles from "./MenuContent.module.css";

import breakfastImg1 from "../public/images/breakfast-1.png";
import breakfastImg2 from "../public/images/breakfast-2.png";
import breakfastImg3 from "../public/images/breakfast-3.png";
import breakfastImg4 from "../public/images/breakfast-4.png";
import breakfastImg5 from "../public/images/breakfast-5.png";
import breakfastImg6 from "../public/images/breakfast-6.png";
import MenuItem from "./MenuItem";

const menuData = [
  {
    img: breakfastImg1,
    title: ["Grilled Beef", "with potatoes"],
    price: 29,
    ingredients: ["Meat", "Potatoes", "Rice", "Tomatoe"],
  },
  {
    img: breakfastImg2,
    title: ["Grilled Beef", "with potatoes"],
    price: 29,
    ingredients: ["Meat", "Potatoes", "Rice", "Tomatoe"],
  },
  {
    img: breakfastImg3,
    title: ["Grilled Beef", "with potatoes"],
    price: 29,
    ingredients: ["Meat", "Potatoes", "Rice", "Tomatoe"],
  },
  {
    img: breakfastImg4,
    title: ["Grilled Beef", "with potatoes"],
    price: 29,
    ingredients: ["Meat", "Potatoes", "Rice", "Tomatoe"],
  },
  {
    img: breakfastImg5,
    title: ["Grilled Beef", "with potatoes"],
    price: 29,
    ingredients: ["Meat", "Potatoes", "Rice", "Tomatoe"],
  },
  {
    img: breakfastImg6,
    title: ["Grilled Beef", "with potatoes"],
    price: 29,
    ingredients: ["Meat", "Potatoes", "Rice", "Tomatoe"],
  },
];

function Menu() {
  return (
    <section className={styles.menu}>
      <div className={styles.menuTitle}>
        <h2 className="font-alexBrush">Speciallies</h2>
        <h3>Our Menu</h3>
      </div>
      <div className={styles.menuContainer}>
        {menuData.map((menuItem, i) => (
          <MenuItem
            img={menuItem.img}
            title={menuItem.title}
            price={menuItem.price}
            ingredients={menuItem.ingredients}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
