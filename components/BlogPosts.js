import blog_1 from "../public/images/blog_1.png";
import blog_2 from "../public/images/blog_2.png";
import blog_3 from "../public/images/blog_3.png";
import blog_4 from "../public/images/blog_4.png";
import blog_5 from "../public/images/blog_5.png";
import blog_6 from "../public/images/blog_6.png";

import Blog from "./Blog";
import Search from "../components/Search";

import styles from "./BlogPosts.module.css";
import { useState } from "react";

function BlogPosts({ blogs }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.blogPosts}>
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
