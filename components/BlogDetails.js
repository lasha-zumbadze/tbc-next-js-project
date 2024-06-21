import Image from "next/image";

function BlogDetails({ blog }) {
  console.log(blog);
  return (
    <>
      <div className="flex flex-col p-4 gap-24">
        <h2 className="text-6xl text-center">{blog.title}</h2>
        <div className="w-4/5 m-auto h-[50rem] relative">
          <Image
            src={blog.imgurl}
            alt={blog.title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>

        <p className="text-2xl text-gray-600">{blog.blog}</p>
      </div>
    </>
  );
}

export default BlogDetails;
