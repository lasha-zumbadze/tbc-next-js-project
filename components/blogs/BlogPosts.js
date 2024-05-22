"use client";

import blog_1 from "../../public/images/blog_1.png";

import Blog from "./Blog";
import Search from "./Search";

import { useState } from "react";

function BlogPosts({ blogs }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="justify-center gap-y-24 gap-x-20 w-5/6 md:w-4/6 lg:-w-5/6 m-auto py-32 px-20 md:px-8 grid lg:grid-cols-2">
        {!search
          ? blogs.map((blog) => (
              <Blog
                imgUrl={blog_1}
                title={blog.title}
                blog={blog.body}
                key={blog.id}
              />
            ))
          : blogs
              .filter((blog, i) => blog.title.toLowerCase().includes(search))
              .map((blog, i) => (
                <Blog
                  imgUrl={blog_1}
                  title={blog.title}
                  blog={blog.body}
                  key={blog.id}
                />
              ))}
      </div>
    </>
  );
}

export default BlogPosts;
