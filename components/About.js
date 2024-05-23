import image1 from "../public/images/about-1.png";
import image2 from "../public/images/about-2.png";
import Image from "next/image";

function About() {
  return (
    <section className="md:h-screen md:mt-24 md:block my-24 flex justify-center items-center relative">
      {/* SMALL SCREEN */}
      <div className="w-5/6 border-2 border-solid border-[#c8a97e] bg-white p-16 shadow-3xl md:hidden">
        <h2 className="font-alexBrush text-[#c8a97e] text-[5rem] font-medium leading-[0.8]">
          About us
        </h2>
        <h3 className="text-6xl mt-4 font-normal">
          An Extraordinary Experience
        </h3>
        <p className="text-[1.4rem] mt-10 text-[#777] leading-loose">
          At VENUE, every dish tells a story. Our journey began with a simple
          idea: to create a place where food lovers could gather and enjoy the
          freshest ingredients, expertly prepared, and served with love.
          Inspired by the diverse culinary traditions of Georgia, we strive to
          innovate while honoring classic techniques.
        </p>
      </div>

      {/* MEDIUM SCREEN */}

      <div className="hidden py-40 px-20 md:flex lg:hidden h-[75rem] gap-10">
        <div>
          <Image
            src={image2}
            alt="cooking"
            className="w-full h-full object-cover relative top-10"
          />
        </div>
      </div>
      <div className="md:block lg:hidden hidden w-[60rem] border-2 border-solid border-[#c8a97e] absolute right-4 top-[calc(50%)] -translate-y-1/2 bg-white p-20 shadow-3xl">
        <h2 className="font-alexBrush text-[#c8a97e] text-[5rem] font-medium leading-[0.8]">
          About us
        </h2>
        <h3 className="text-[4rem] font-normal">An Extraordinary Experience</h3>
        <p className="text-[1.4rem] mt-10 text-[#777] leading-loose">
          At VENUE, every dish tells a story. Our journey began with a simple
          idea: to create a place where food lovers could gather and enjoy the
          freshest ingredients, expertly prepared, and served with love.
          Inspired by the diverse culinary traditions of Georgia, we strive to
          innovate while honoring classic techniques.
        </p>
      </div>

      {/* LARGE SCREEN */}
      <div className="hidden py-40 px-80 lg:flex h-[75rem] gap-10">
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
      <div className="hidden lg:block w-[60rem] border-2 border-solid border-[#c8a97e] absolute right-40 top-[calc(50%+2.5rem)] -translate-y-1/2 bg-white p-20 shadow-3xl">
        <h2 className="font-alexBrush text-[#c8a97e] text-[5rem] font-medium leading-[0.8]">
          About us
        </h2>
        <h3 className="text-[4rem] font-normal">An Extraordinary Experience</h3>
        <p className="text-[1.4rem] mt-10 text-[#777] leading-loose">
          At VENUE, every dish tells a story. Our journey began with a simple
          idea: to create a place where food lovers could gather and enjoy the
          freshest ingredients, expertly prepared, and served with love.
          Inspired by the diverse culinary traditions of Georgia, we strive to
          innovate while honoring classic techniques.
        </p>
      </div>
    </section>
  );
}

export default About;
