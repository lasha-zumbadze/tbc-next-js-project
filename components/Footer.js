import Logo from "./Logo";
import Reservation from "./Reservation";

function Footer() {
  return (
    <footer>
      <Reservation />
      <div className="py-24 px-32 lg:py-12 md:px-20 lg:px-28 bg-[#232323] grid md:grid-cols-2 lg:grid-cols-3 text-white items-center justify-center justify-items-center gap-y-16 md:gap-y-16 lg:gap-x-8">
        <div className="flex flex-col items-center md:items-start">
          <Logo titleFont={5} subtitleFont={2} letterSpace={1} />
          <div className="text-[1.4rem] text-[#b6b6b6] mt-8 md:mt-16">
            <p>Copyright &#169; 2024 All rights reserved.</p>
            <p className="mt-2 md:mt-4 cursor-pointer w-fit transition-all hover:text-[#c8a97e]">
              Terms and Conditions
            </p>
          </div>
        </div>
        <div className="flex flex-col md:gap-8 gap-4">
          <h3 className="text-[2.6rem] text-center ">Contact</h3>
          <p className="text-[1.8rem]">481 Creekside Lane Avila CA 93424</p>
          <p className="text-[1.8rem]">+995 123 456 789</p>
          <p className="text-[1.8rem]">example@gmail.com</p>
        </div>
        <div className="flex flex-col gap-8 md:col-span-2 lg:col-span-1">
          <h3 className="text-[2.6rem] text-center">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-[22rem] h-20 px-8 border-none bg-[#ffffff1a] text-[rgba(255, 255, 255, 0.7)] text-[1.8rem] text-center placeholder:text-[#b6b6b6]"
          />
          <button className="w-[22rem] h-20 px-8 border-none bg-[#c8a97e] text-[2rem] text-white transition-all hover:bg-[#c2a49500] hover:outline-[3px] hover:outline hover:outline-[#c8a97e] ">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
