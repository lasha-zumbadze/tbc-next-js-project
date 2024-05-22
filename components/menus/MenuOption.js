import Image from "next/image";

function MenuOption({ img, option, meals }) {
  return (
    <div className="flex flex-col gap-12">
      <Image src={img} alt="meal" className="w-full" />
      <div className="border-[1px] border-solid border-[#c4ab9f7b] p-12 flex flex-col gap-8 transition-all hover:shadow-7xl">
        <h2 className="text-[3.5rem] text-[#c4ab9f] border-[2.5px] border-solid border-[#c4ab9f] w-fit leading-none p-4 mb-8 font-normal">
          {option}
        </h2>
        {meals.map((meal, i) => (
          <div key={i}>
            <div className="flex justify-between items-center color-[#333] mb-[0.4rem]">
              <h3 className="text-[1.8rem] font-normal">{meal.name}</h3>
              <p className="text-[1.8rem] font-normal">${meal.price}</p>
            </div>
            <p className="text-[1.4rem] text-[#666]">
              {meal.components.join("/ ")}
            </p>
            <a
              className="text-[#c4ab9f] text-[1.7rem] font-normal block mt-6 w-fit border-b-[1px] border-solid border-white hover:border-[#c4ab9f]"
              href="#"
            >
              Order Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuOption;
