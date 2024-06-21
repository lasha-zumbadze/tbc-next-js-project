import Image from "next/image";
import Heading from "./Heading";
import visitImage from "../public/visit.jpg";
import decor from "../public/decorverylong.svg";

function Visit() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center items-center relative lg:h-[70vh] h-[80vh] bg-backgroundDarkblue">
      <div className="flex flex-col gap-12 justify-center items-center py-28">
        <Heading gap={16} minHeight={16}>
          <h1 className="text-8xl font-bold text-textGolden">VISIT US</h1>
        </Heading>
        <p className="text-white text-3xl">
          Georgia, Tbilisi, Tskneti Hwy 10 | info@kokeshi.com
        </p>
        <h2 className="text-textGolden text-4xl text-center mt-12">
          OPENING HOURS:
        </h2>
        <div className="text-white flex justify-between text-3xl w-full">
          <div className="flex flex-col gap-4">
            <p>Monday - Friday</p>
            <p>Saturday - Sanday</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>11.00 AM - 11.00 PM</p>
            <p>12.00 AM - 12.00 PM</p>
          </div>
        </div>
      </div>
      <div className="absolute -translate-x-1/2 hidden lg:block">
        <Image src={decor} />
      </div>
      <div className="aspect-[3/2] relative w-full">
        <Image
          src={visitImage}
          fill
          sizes="(max-width: 600px) 90vw, (max-width: 1200px) 40vw, 33vw"
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Visit;
