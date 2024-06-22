import MenuOption from "./MenuOption";
import Link from "next/link";
import HoverButton from "../HoverButton";

const menuOptionsData = [
  {
    option: "ROLL",
    meals: [
      {
        name: "Rainbow Roll",
        price: 40,
        components: ["Rice", "Nori", "Crab mix", "Avocado"],
      },
      {
        name: "Unagi Roll",
        price: 40,
        components: ["Rice", "Nori", "Cream cheese", "Salmon"],
      },
      {
        name: "Philadelphia Roll",
        price: 35,
        components: ["Rice", "Nori", "Cream cheese", "Avocado"],
      },
      {
        name: "Dragon Roll",
        price: 45,
        components: ["Rice", "Nori", "Cream cheese", "Cucumber", "Eel"],
      },
    ],
  },
  {
    option: "MAKI",
    meals: [
      {
        name: "Cucumber Maki",
        price: 5,
        components: ["Rice", "Nori", "Cucumber", "Sesame"],
      },
      {
        name: "Avocado Maki",
        price: 7,
        components: ["Rice", "Nori", "Avocado"],
      },
      {
        name: "Shrimp Maki",
        price: 11,
        components: ["Rice", "Nori", "Shrimp", "Oil mayo", "Wasabi"],
      },
      {
        name: "Crab Maki",
        price: 7,
        components: ["Rice", "Nori", "Crab mix"],
      },
    ],
  },
  {
    option: "NIGIRI",
    meals: [
      {
        name: "Salmon Nigiri",
        price: 12,
        components: ["Rice", "Salmon", "Caviar"],
      },
      {
        name: "Hot Salmon Nigiri",
        price: 10,
        components: ["Rice", "Grilled salmon", "Unagi sauce"],
      },
      {
        name: "Eel Nigiri",
        price: 13,
        components: ["Rice", "Eel", "Unagi sauce", "Sesame"],
      },
      {
        name: "Shrimp Nigiri",
        price: 12,
        components: ["Rice", "Shrimp", "Hot mayo", "Tobiko", "Green onion"],
      },
    ],
  },
];

function Menu() {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-24 py-20 pb-32 bg-[#293441]">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-12 gap-x-12">
        {menuOptionsData.map((menu, i) => (
          <MenuOption
            option={menu.option}
            meals={menu.meals}
            key={i}
            menuPage={false}
          />
        ))}
      </div>
      <Link
        href="/dishes"
        className="text-textGolden hover:text-white transition-all"
      >
        <HoverButton width={60}>Read Menu</HoverButton>
      </Link>
    </section>
  );
}

export default Menu;
