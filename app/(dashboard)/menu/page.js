import starter from "../../../public/images/starters.png";
import main from "../../../public/images/main.png";
import deserts from "../../../public/images/deserts.png";
import MenuOption from "../../../components/menus/MenuOption";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const menuOptionsData = [
  {
    img: starter,
    option: "Starters",
    meals: [
      {
        name: "Pork Tenderloin in Green Pepper",
        price: 20,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Shrimp with Garlic",
        price: 17,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Wild Mushroom with Chicken",
        price: 20,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Oysters with Baked Potatoes",
        price: 20,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Roast Pork",
        price: 17,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
    ],
  },
  {
    img: main,
    option: "Main",
    meals: [
      {
        name: "Chicken with Lemon",
        price: 25,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Pork Tenderloin in Green Pepper",
        price: 20,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Shrimp with Garlic",
        price: 17,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Wild Mushroom with Chicken",
        price: 20,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Oysters with Baked Potatoes",
        price: 20,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Roast Pork",
        price: 17,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
    ],
  },
  {
    img: deserts,
    option: "Deserts",
    meals: [
      {
        name: "Chicken with Lemon",
        price: 25,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Pork Tenderloin in Green Pepper",
        price: 20,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Shrimp with Garlic",
        price: 17,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Wild Mushroom with Chicken",
        price: 20,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Oysters with Baked Potatoes",
        price: 20,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
      {
        name: "Roast Pork",
        price: 17,
        components: ["Pork", "Tenderloin", "Green Pepper"],
      },
    ],
  },
];

function Menu() {
  return (
    <>
      <Header pageClass="menu" title="The Venue" subtitle="The Menu" />
      <main>
        <section className="pt-24 pb-40 flex flex-col items-center gap-12 w-4/5 m-auto">
          <div className="flex flex-col items-center">
            <h1 className="font-alexBrush text-[5rem] text-[#a68250]">
              Something new
            </h1>
            <h2 className="text-[5rem] -mt-[4.5rem] italic">
              Discover Our Menu
            </h2>
          </div>
          <div className="flex gap-12 py-8 px-20">
            <p className="text-2xl text-[#444] leading-[1.8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Ut non justo eleifend, facilisis nibh ut, interdum odio.
              Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae
              aliquet dolor venenatis. Nulla consequat fringilla.
            </p>
            <p className="text-2xl text-[#444] leading-[1.8]">
              Sit amet, consectetur adipiscing elit. Donec malesuada lorem
              maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula
              sapien. Suspendisse cursus faucibus finibus. Ut non justo
              eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.
              Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
              venenatis. Nulla consequat fringilla.
            </p>
          </div>
          <div className="grid grid-cols-3 mt-12 gap-x-12">
            {menuOptionsData.map((menu, i) => (
              <MenuOption
                img={menu.img}
                option={menu.option}
                meals={menu.meals}
                key={i}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Menu;
