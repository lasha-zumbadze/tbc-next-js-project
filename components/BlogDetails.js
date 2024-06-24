import Image from "next/image";
import Decor from "./Decor";

function BlogDetails({ blog }) {
  return (
    <>
      <div className="flex flex-col p-4 gap-28 w-10/12 md:w-3/5 m-auto">
        <div className="flex flex-col md:flex-row justify-center mt-44 md:mt-32 py-8 items-center gap-8 md:gap-16">
          <Decor />
          <div className="flex items-center flex-col">
            <h1 className="font-alexBrush text-7xl md:text-[5rem] text-[#a68250]">
              KoKeshI
            </h1>
            <h2 className="text-7xl md:text-[5rem] -mt-8 italic text-white text-center">
              {blog.title}
            </h2>
          </div>
          <Decor />
        </div>

        <div className="w-full m-auto h-[50rem] relative">
          <Image
            src={blog.imgurl}
            alt={blog.title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <div className="-mt-12">
          <h3 className="text-textGolden text-4xl pb-8">{blog.title}</h3>
          <p className="text-3xl text-gray-300 mb-28">{blog.blog}</p>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
