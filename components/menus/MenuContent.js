import MenuItem from "./MenuItem";
import breakfastImg1 from "../../public/images/menu/chicken-shkmeruli.jpg";
import breakfastImg2 from "../../public/images/menu/ostri.jpg";
import breakfastImg3 from "../../public/images/menu/veal-stew.jpg";
import breakfastImg4 from "../../public/images/menu/pork-barbecue.jpg";
import breakfastImg5 from "../../public/images/menu/greek-salad.jpg";
import breakfastImg6 from "../../public/images/menu/chicken-parmesani.jpg";

const menuData = [
  {
    img: breakfastImg1,
    title: ["Chicken", '"Shkmeruli"'],
    price: 31,
    ingredients: ["Fried chick", "Garlic", "Sour cream"],
  },
  {
    img: breakfastImg2,
    title: ["Ostri"],
    price: 24,
    ingredients: ["Beef", "Sauce", "Onion", "Red pepper"],
  },
  {
    img: breakfastImg3,
    title: ["Veal Stew"],
    price: 35,
    ingredients: [
      "Veal",
      "Tomato",
      "Onion",
      "Wine",
      "Coriander",
      "Pepper",
      "Butter",
    ],
  },
  {
    img: breakfastImg4,
    title: ["Pork Barbecue"],
    price: 20,
    ingredients: ["Pork", "Salt", "Onion", "Somegranate"],
  },
  {
    img: breakfastImg5,
    title: ["Greek-salad"],
    price: 14,
    ingredients: [
      "Cucumber",
      "tomato",
      "olive",
      "green and red bell pepper",
      "lemon",
      "onion",
      "feta",
      "olive oil",
    ],
  },
  {
    img: breakfastImg6,
    title: ["Chicken with parmesan"],
    price: 12,
    ingredients: [
      "Boiled chicken fillet",
      "mayonnaise",
      "green bell pepper",
      "parmesan",
    ],
  },
];

function Menu() {
  return (
    <section className="flex flex-col items-center gap-24 md:pt-52 lg:pt-60 pt-40 pb-40">
      <div>
        <h2 className="font-alexBrush text-[#c8a97e] text-8xl md:text-[8rem] lg:text-[11rem] font-normal leading-[0] text-center">
          Specialties
        </h2>
        <h3 className="text-6xl md:text-7xl lg:text-8xl text-center font-medium mt-1">
          Our Menu
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 md:px-24 justify-items-center">
        {menuData.map((menuItem, i) => (
          <MenuItem
            img={menuItem.img}
            title={menuItem.title}
            price={menuItem.price}
            ingredients={menuItem.ingredients}
            index={i}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
