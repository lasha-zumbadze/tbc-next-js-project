// import Image from "next/image";

// function ServiceItem({ icon, title, context }) {
//   return (
//     <div className="flex flex-col items-center text-center h-full">
//       <Image src={icon} alt="icon" className="w-32 mb-8" />
//       <h3 className="text-5xl font-normal">{title}</h3>
//       <p className="text-[1.8rem] text-[#888] font-normal leading-[1.6] mt-8 px-8">
//         {context}
//       </p>
//     </div>
//   );
// }

// export default ServiceItem;

import Image from "next/image";

function ServiceItem({ icon, title, context, index }) {
  return (
    <div
      className={`flex flex-col items-center text-center h-full p-6 md:p-8 ${
        index === 3 &&
        "md:col-span-2 lg:col-span-1 lg:w-full md:w-1/2 md:m-auto"
      }`}
    >
      <Image src={icon} alt="icon" className="w-36 mb-6 md:mb-8" />
      <h3 className="text-4xl md:text-5xl font-normal">{title}</h3>
      <p className="text-2xl md:text-[1.7rem] text-[#888] font-normal lg:leading-snug mt-6 md:mt-8 px-4 sm:px-6 md:px-8">
        {context}
      </p>
    </div>
  );
}

export default ServiceItem;
