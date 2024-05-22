import Image from "next/image";

function Blog({ imgUrl, title, blog }) {
  return (
    <div>
      <Image src={imgUrl} alt="blog" className="w-full" />
      <h2 className="text-4xl md:text-5xl border-b-[3px] border-solid border-[#c4ab9f] w-fit mt-4 mb-4 md:mb-8 pb-4 text-[#303030]">
        {title}
      </h2>
      <p className="text-[1.6rem] leading-[1.8] text-[#777] line-clamp-2">
        {blog}
      </p>
      <button className="border-none outline-2 outline outline-[#c4ab9f] py-4 px-20 rounded-md font-semibold text-[#39322e] text-[1.6rem] tracking-[1px] mt-8 transition-all cursor-pointer bg-[#c4ab9f] shadow-md shadow-[#0000006f] hover:bg-white">
        Read more
      </button>
    </div>
  );
}

export default Blog;
