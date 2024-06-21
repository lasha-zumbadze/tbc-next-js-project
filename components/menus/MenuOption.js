import Heading from "../Heading";

function MenuOption({ option, meals }) {
  return (
    <div className="flex flex-col gap-12">
      <div className="p-20 flex flex-col gap-12 transition-all hover:shadow-7xl">
        <Heading gap={8} minHeight={8}>
          <h2 className="text-[3.5rem] text-textGolden leading-none p-4 font-normal">
            {option}
          </h2>
        </Heading>
        {meals.map((meal, i) => (
          <div key={i}>
            <div className="flex justify-between items-center color-[#333] mb-[0.4rem]">
              <h3 className="text-[1.8rem] font-normal text-textGolden">
                {meal.name}
              </h3>
              <div className="text-textGolden font-bold">
                -------------------------
              </div>
              <p className="text-[1.8rem] text-textGolden font-semibold">
                ${meal.price}
              </p>
            </div>
            <p className="text-[1.4rem] text-[#d2d8df]">
              {meal.components.join("/ ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuOption;
