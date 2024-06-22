import image1 from "../public/about/pic1.jpg";
import image2 from "../public/about/pic2.jpg";
import Image from "next/image";
import Decor from "./Decor";
import Heading from "./Heading";

function About() {
  return (
    <section className="flex flex-col justify-center items-center dark:bg-backgroundDarkblue">
      <div className="flex flex-col items-center mt-[6rem] pt-20">
        <Heading gap={16} minHeight={16}>
          <h1 className="font-alexBrush text-7xl md:text-9xl text-[#a68250]">
            About us
          </h1>
        </Heading>
        <h2 className="text-7xl md:text-[5rem] italic dark:text-white text-center mt-4 md:mt-0">
          An Extraordinary Experience
        </h2>
      </div>

      <div className="lg:py-32 lg:pb-44 pt-32 pb-28 lg:px-80 px-20 flex flex-col items-center lg:grid grid-cols-3 gap-10">
        <div>
          <Image src={image1} alt="cooking" />
        </div>
        <div className="flex flex-col items-center justify-center text-center lg:gap-16 py-12 lg:py-0">
          <Decor />
          <div>
            <p className="text-[1.6rem] mt-10 text-[#777] leading-loose">
              At VENUE, every dish tells a story. Our journey began with a
              simple idea: to create a place where food lovers could gather and
              enjoy the freshest ingredients, expertly prepared, and served with
              love. Inspired by the diverse culinary traditions of Georgia, we
              strive to innovate while honoring classic techniques.
            </p>
          </div>
        </div>
        <div>
          <Image src={image2} alt="cooking" />
        </div>
      </div>
    </section>
  );
}

export default About;
