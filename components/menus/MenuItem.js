import Image from "next/image";

function MenuItem({ img, title, price, ingredients, index }) {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center w-4/5 md:w-full ">
      <div
        className={`w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8 md:mb-0  ${
          index + 1 === 3 || index + 1 === 4 ? "lg:order-2" : "lg:order-1"
        } ${index % 2 > 0 && "md:order-2"}`}
      >
        <Image
          src={img}
          alt="meal"
          className="w-full h-auto hover:scale-110 transition-transform"
        />
      </div>
      <div
        className={`w-full md:w-1/2 lg:w-1/2 xl:w-1/2 border border-gray-300 p-8 bg-white  ${
          index + 1 === 3 || index + 1 === 4 ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="flex flex-row justify-between items-center mb-8">
          <h4 className="text-4xl font-medium">{title}</h4>
          <p className="text-4xl font-semibold text-[#c8a97e]">${price}</p>
        </div>
        <p className="text-2xl">{ingredients.join(", ")}</p>
        <button className="mt-8 px-6 py-3 bg-[#c8a97e] text-white text-2xl font-semibold rounded transition-colors duration-300 hover:bg-white hover:text-[#c8a97e] hover:border-[#c8a97e] border border-[#c8a97e]">
          Order now
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
