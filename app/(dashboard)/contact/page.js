import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import facebookIcon from "../../../public/images/facebook-icon.png";
import instagramIcon from "../../../public/images/instagram-icon.png";
import twitterIcon from "../../../public/images/twitter-icon.png";
import linkedinIcon from "../../../public/images/linkedin-icon.png";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <>
      <Header pageClass="contact" title="KoKeshI" subtitle="Contact" />
      <main>
        <div className="grid lg:grid-cols-2 items-center w-4/5 m-auto gap-x-32 pt-24 pb-40 gap-y-4">
          <div className="flex flex-col gap-24 lg:gap-32">
            <h2 className="text-[3.5rem]">Contact info</h2>
            <p className="text-[1.6rem] text-gray-500 leading-loose mb-12 col-start-1">
              We&apos;d love to hear from you! Whether you have a question, need
              a reservation, or just want to share your thoughts, here&apos;s
              how you can reach us. <br /> Enjoy an unforgettable dining
              experience! Call us during business hours or use our{" "}
              <Link
                href="#reservation"
                className="text-[#c8a97e] border-b-[1px] border-[#c8a97e] hover:text-[#d79b47] transition-all hover:border-[#d79b47]"
              >
                online reservation form
              </Link>{" "}
              to secure your table.
            </p>
            {/* <div className="lg:m-0 w-fit">
              <Logo titleFont={5} subtitleFont={2} letterSpace={1} />
            </div> */}
          </div>
          <div className="lg:col-start-2 mt-20 m-auto lg:m-0 border-solid border-[3px] border-[#c8a97e] p-20 w-fit text-[1.6rem] flex flex-col gap-8 text-gray-500">
            <p>
              <span className="text-black text-[1.8rem] mr-4">Address:</span>
              481 Creekside Lane Avila CA 93424
            </p>
            <p>
              <span className="text-black text-[1.8rem] mr-4">Phone:</span> +995
              123 456 789
            </p>
            <p>
              <span className="text-black text-[1.8rem] mr-4">Email:</span>
              example@gmail.com
            </p>
            <div className="flex justify-around pt-8">
              <Image
                className="w-12 cursor-pointer transition-all hover:scale-125"
                src={facebookIcon}
                alt="facebook"
              />
              <Image
                className="w-12 cursor-pointer transition-all hover:scale-125"
                src={instagramIcon}
                alt="instagram"
              />
              <Image
                className="w-12 cursor-pointer transition-all hover:scale-125"
                src={twitterIcon}
                alt="twitter"
              />
              <Image
                className="w-12 cursor-pointer transition-all hover:scale-125"
                src={linkedinIcon}
                alt="linkedin"
              />
            </div>
          </div>
        </div>
        <ContactForm />
        <div className="overflow-hidden w-full brightness-[0.3] hover:brightness-100 transition-all duration-700">
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=Stamford%20Bridge%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
            title="Stamford Bridge, London, United Kingdom"
            aria-label="Stamford Bridge, London, United Kingdom"
            className="h-[40rem] w-full"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
