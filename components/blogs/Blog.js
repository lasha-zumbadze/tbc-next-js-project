import Image from "next/image";
import BlogUpdateForm from "../update/BlogUpdate";
import DeleteBlog from "../deletion/DeleteBlog";
import Link from "next/link";

function Blog({ imgUrl, title, blog, id, imageNum, imgInitialNum, lastImage }) {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <BlogUpdateForm
          blogTitle={title}
          blogContent={blog}
          blogImg={imageNum > imgInitialNum.current ? lastImage.url : imgUrl}
          imgInitialNum={imgInitialNum}
          imageNum={imageNum}
          id={id}
        />
        <DeleteBlog id={id} />
      </div>
      <div className="w-full aspect-[3/2] relative">
        <Image
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>

      <div className="border-r-[1px] border-b-[1px] pr-6 pb-6 border-textGolden">
        <h2 className="text-4xl md:text-5xl border-b-[3px] border-solid border-[#c4ab9f] w-fit mt-4 mb-4 md:mb-8 pb-4 text-[#303030] break-words dark:text-[#c4ab9f]">
          {title}
        </h2>
        <p className="text-[1.6rem] leading-[1.8] text-[#777] line-clamp-2 break-words dark:text-gray-100">
          {blog}
        </p>
        <Link className="w-fit" href={`/blog/${id}`}>
          <button className="border-none outline-2 outline outline-[#c4ab9f] py-4 px-20 rounded-md font-semibold text-[#39322e] text-[1.6rem] tracking-[1px] mt-8 transition-all cursor-pointer bg-[#c4ab9f] shadow-md shadow-[#0000006f] hover:bg-white">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
