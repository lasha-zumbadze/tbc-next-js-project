"use client";

import { useEffect, useState } from "react";
import BlogPosts from "../../../components/blogs/BlogPosts";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function blogsData() {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      setBlogs(data.posts);
    }

    blogsData();
  }, []);

  return (
    <>
      <Header pageClass="blogs" title="The Venue" subtitle="Blogs" />
      <main>
        <BlogPosts blogs={blogs} />
      </main>
      <Footer />
    </>
  );
}

export default Blogs;
