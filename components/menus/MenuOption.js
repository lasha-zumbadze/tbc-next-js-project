// import Image from "next/image";
// import Heading from "../Heading";

// function MenuOption({ option, meals, menuPage, img }) {
//   return (
//     <div className="flex flex-col gap-12">
//       {menuPage && <Image src={img} alt="menu" />}
//       <div className="p-20 flex flex-col gap-12 transition-all hover:shadow-7xl">
//         <Heading gap={8} minHeight={8}>
//           <h2 className="text-[3.5rem] text-textGolden leading-none p-4 font-normal">
//             {option}
//           </h2>
//         </Heading>
//         {meals.map((meal, i) => (
//           <div key={i}>
//             <div className="flex justify-between items-center color-[#333] mb-[0.4rem]">
//               <h3 className="text-[1.8rem] font-normal text-textGolden">
//                 {meal.name}
//               </h3>
//               <div className="text-textGolden font-bold">
//                 -------------------------
//               </div>
//               <p className="text-[1.8rem] text-textGolden font-semibold">
//                 ${meal.price}
//               </p>
//             </div>
//             <p className="text-[1.4rem] text-[#d2d8df]">
//               {meal.components.join("/ ")}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MenuOption;

import Image from "next/image";
import Heading from "../Heading";

function MenuOption({ option, meals, menuPage, img }) {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {menuPage && <Image src={img} alt="menu" className="w-full h-auto" />}
      <div className="p-4 md:p-20 flex flex-col gap-8 md:gap-12 transition-all hover:shadow-7xl">
        <Heading gap={8} minHeight={8}>
          <h2 className="text-[3.5rem] text-textGolden leading-none p-4 font-normal">
            {option}
          </h2>
        </Heading>
        {meals.map((meal, i) => (
          <div key={i}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center color-[#333] mb-[0.4rem]">
              <h3 className="text-[1.8rem] font-normal text-textGolden">
                {meal.name}
              </h3>
              <div className="hidden md:block text-textGolden font-bold">
                -------------------------
              </div>
              <p className="text-[1.8rem] text-textGolden font-semibold">
                ${meal.price}
              </p>
            </div>
            <p className="text-[1.4rem] text-gray-400">
              {meal.components.join("/ ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuOption;
