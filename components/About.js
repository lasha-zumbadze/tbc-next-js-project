import image1 from "../public/images/about-1.png";
import image2 from "../public/images/about-2.png";
import Image from "next/image";

function About() {
  return (
    <section className="h-screen mt-24 relative">
      <div className="py-40 px-80 flex h-[75rem] gap-10">
        <div>
          <Image
            src={image1}
            alt="cooking"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Image
            src={image2}
            alt="cooking"
            className="w-full h-full object-cover relative top-10"
          />
        </div>
      </div>
      <div className="w-[60rem] border-2 border-solid border-[#c8a97e] absolute right-40 top-[calc(50%+2.5rem)] -translate-y-1/2 bg-white p-20 shadow-3xl">
        <h2 className="font-alexBrush text-[#c8a97e] text-[5rem] font-medium leading-[0.8]">
          About us
        </h2>
        <h3 className="text-[4rem] font-normal">An Extraordinary Experience</h3>
        <p className="text-[1.4rem] mt-10 text-[#777] leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut
          ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo
          eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.
          Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis.
          Nulla consequat fringilla massa.
        </p>
      </div>
    </section>
  );
}

export default About;
