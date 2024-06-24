// import starter from "../../../public/images/starters.png";
// import main from "../../../public/images/main.png";
// import deserts from "../../../public/images/deserts.png";
// import MenuOption from "../../../components/menus/MenuOption";
// import Footer from "../../../components/Footer";
// import Header from "../../../components/Header";
// import Decor from "@/components/Decor";
// import menuImg1 from "../../../public/menu1.jpg";
// import menuImg2 from "../../../public/menu2.jpg";
// import menuImg3 from "../../../public/menu3.jpg";

// const menuOptionsData = [
//   {
//     option: "ROLL",
//     img: menuImg1,
//     meals: [
//       {
//         name: "Rainbow Roll",
//         price: 40,
//         components: ["Rice", "Nori", "Crab mix", "Avocado"],
//       },
//       {
//         name: "Unagi Roll",
//         price: 40,
//         components: ["Rice", "Nori", "Cream cheese", "Salmon"],
//       },
//       {
//         name: "Philadelphia Roll",
//         price: 35,
//         components: ["Rice", "Nori", "Cream cheese", "Avocado"],
//       },
//       {
//         name: "Dragon Roll",
//         price: 45,
//         components: ["Rice", "Nori", "Cream cheese", "Cucumber", "Eel"],
//       },
//     ],
//   },
//   {
//     option: "MAKI",
//     img: menuImg2,
//     meals: [
//       {
//         name: "Cucumber Maki",
//         price: 5,
//         components: ["Rice", "Nori", "Cucumber", "Sesame"],
//       },
//       {
//         name: "Avocado Maki",
//         price: 7,
//         components: ["Rice", "Nori", "Avocado"],
//       },
//       {
//         name: "Shrimp Maki",
//         price: 11,
//         components: ["Rice", "Nori", "Shrimp", "Oil mayo", "Wasabi"],
//       },
//       {
//         name: "Crab Maki",
//         price: 7,
//         components: ["Rice", "Nori", "Crab mix"],
//       },
//     ],
//   },
//   {
//     option: "NIGIRI",
//     img: menuImg3,
//     meals: [
//       {
//         name: "Salmon Nigiri",
//         price: 12,
//         components: ["Rice", "Salmon", "Caviar"],
//       },
//       {
//         name: "Hot Salmon Nigiri",
//         price: 10,
//         components: ["Rice", "Grilled salmon", "Unagi sauce"],
//       },
//       {
//         name: "Eel Nigiri",
//         price: 13,
//         components: ["Rice", "Eel", "Unagi sauce", "Sesame"],
//       },
//       {
//         name: "Shrimp Nigiri",
//         price: 12,
//         components: ["Rice", "Shrimp", "Hot mayo", "Tobiko", "Green onion"],
//       },
//     ],
//   },
// ];

// function Menu() {
//   return (
//     <>
//       <Header pageClass="menu" title="KoKeshI" subtitle="Menu" />
//       <main>
//         <section className="pt-24 pb-40 flex flex-col items-center gap-12 w-4/5 m-auto">
//           <div className="flex justify-center items-center gap-16">
//             <Decor />
//             <div className="flex flex-col items-center">
//               <h1 className="font-alexBrush text-[5rem] text-[#a68250]">
//                 Something new
//               </h1>
//               <h2 className="text-[5rem] -mt-[4.5rem] italic">
//                 Discover Our Menu
//               </h2>
//             </div>
//             <Decor />
//           </div>
//           <div className="flex gap-12 py-8 px-20">
//             <p className="text-2xl text-[#444] leading-[1.8]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//               malesuada lorem maximus mauris scelerisque, at rutrum nulla
//               dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
//               Ut non justo eleifend, facilisis nibh ut, interdum odio.
//               Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae
//               aliquet dolor venenatis. Nulla consequat fringilla.
//             </p>
//             <p className="text-2xl text-[#444] leading-[1.8]">
//               Sit amet, consectetur adipiscing elit. Donec malesuada lorem
//               maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula
//               sapien. Suspendisse cursus faucibus finibus. Ut non justo
//               eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.
//               Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
//               venenatis. Nulla consequat fringilla.
//             </p>
//           </div>
//           <div className="grid grid-cols-3 mt-12 gap-x-12">
//             {menuOptionsData.map((menu, i) => (
//               <MenuOption
//                 img={menu.img}
//                 option={menu.option}
//                 meals={menu.meals}
//                 menuPage={true}
//                 key={i}
//               />
//             ))}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default Menu;

import starter from "../../../public/images/starters.png";
import main from "../../../public/images/main.png";
import deserts from "../../../public/images/deserts.png";
import MenuOption from "../../../components/menus/MenuOption";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Decor from "@/components/Decor";
import menuImg1 from "../../../public/menu1.jpg";
import menuImg2 from "../../../public/menu2.jpg";
import menuImg3 from "../../../public/menu3.jpg";

const menuOptionsData = [
  {
    option: "ROLL",
    img: menuImg1,
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
    img: menuImg2,
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
    img: menuImg3,
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
    <div className="dark:bg-backgroundDarkblue">
      <Header pageClass="menu" title="KoKeshI" subtitle="Menu" />
      <main>
        <section className="pt-24 pb-40 flex flex-col items-center gap-8 md:gap-12 w-11/12 md:w-4/5 m-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <Decor />
            <div className="flex flex-col items-center text-center">
              <h1 className="font-alexBrush text-[5rem] text-[#a68250] leading-[1] lg:leading-none">
                Something new
              </h1>
              <h2 className="text-[5rem] md:-mt-[2.5rem] lg:-mt-6 italic leading-[1] lg:leading-none">
                Discover Our Menu
              </h2>
            </div>
            <Decor />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-8 px-4 md:px-20">
            <p className="text-2xl text-[#444] leading-[1.8] dark:text-gray-300">
              At <em>KoKeshI</em>, we pride ourselves on sourcing the freshest
              ingredients daily. Our fish is hand-selected from local markets
              and trusted suppliers, ensuring the highest quality and utmost
              freshness in every bite. Explore a diverse menu that celebrates
              the art of sushi. From classic nigiri and sashimi to inventive
              maki rolls and specialty dishes, our menu offers something for
              everyone. Vegetarian and vegan options are also available, crafted
              with the same attention to flavor and freshness.
            </p>
            <p className="text-2xl text-[#444] leading-[1.8] dark:text-gray-300">
              Our skilled chefs bring years of experience and passion to the
              sushi bar, expertly preparing each dish with precision and care.
              They blend traditional techniques with contemporary flair,
              creating dishes that are as visually stunning as they are
              delicious. We are committed to sustainability and responsible
              sourcing practices. Our seafood choices reflect our dedication to
              preserving ocean ecosystems, supporting sustainable fisheries, and
              reducing our environmental footprint.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12 gap-y-16 md:gap-x-12 px-12 md:px-0">
            {menuOptionsData.map((menu, i) => (
              <MenuOption
                img={menu.img}
                option={menu.option}
                meals={menu.meals}
                menuPage={true}
                key={i}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Menu;
