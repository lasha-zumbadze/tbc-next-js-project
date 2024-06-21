import Image from "next/image";
import Link from "next/link";
import { RxDoubleArrowRight } from "react-icons/rx";

function BlogForHomePage({ imgUrl, title, blog, id }) {
  return (
    <div>
      <div className="w-full aspect-square relative group">
        <Link className="w-fit" href={`/blog/${id}`}>
          <div className="opacity-0 group-hover:opacity-100 border-solid border-[2px] border-textGolden w-full h-full absolute top-0 left-0 group-hover:scale-95 transition-all flex justify-center items-center z-10">
            <RxDoubleArrowRight className="text-8xl text-textGolden" />
          </div>
          <Image
            src={imgUrl}
            alt={title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg transition-all group-hover:brightness-50"
          />
        </Link>
      </div>

      <div className="border-r-[1px] border-b-[1px] border-textGolden pr-4 pb-4">
        <h2 className="text-4xl md:text-5xl w-fit mt-8 mb-4 pb-4 text-textGolden break-words">
          {title}
        </h2>

        <p className="text-[1.6rem] leading-[1.8] text-[#777] line-clamp-3 break-words">
          {blog}
        </p>
      </div>
    </div>
  );
}

export default BlogForHomePage;
