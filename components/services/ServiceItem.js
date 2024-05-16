import Image from "next/image";

function ServiceItem({ icon, title, context }) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={icon} alt="icon" className="w-32 mb-8" />
      <h3 className="text-5xl font-normal">{title}</h3>
      <p className="text-[1.8rem] text-[#888] font-normal leading-[1.6] mt-8 px-8">
        {context}
      </p>
    </div>
  );
}

export default ServiceItem;
