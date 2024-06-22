import Link from "next/link";
import BlogForHomePage from "./BlogForHomePage";
import HoverButton from "../HoverButton";

function BlogPostsForHomePage({ blogs }) {
  return (
    <div className="flex flex-col items-center">
      <div className="justify-center gap-y-24 gap-x-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-20 pt-28 w-4/6 md:w-5/6 m-auto">
        {blogs.map((blog) => (
          <BlogForHomePage
            imgUrl={blog.imgurl}
            title={blog.title}
            blog={blog.blog}
            id={blog.id}
            key={blog.id}
          />
        ))}
      </div>
      <Link
        href="/blog"
        className="text-textGolden hover:text-white transition-all"
      >
        <HoverButton width={60}>Read Menu</HoverButton>
      </Link>
    </div>
  );
}

export default BlogPostsForHomePage;
