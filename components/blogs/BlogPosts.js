// "use client";

// import blog_1 from "../../public/images/blog_1.png";
// import Pagination from "../Pagination";
// import BlogUploadForm from "../uploads/BlogForm";

// import Blog from "./Blog";
// import Search from "./Search";

// import { useRef, useState } from "react";

// function BlogPosts({ blogs, lastImage, imageNum }) {
//   const [search, setSearch] = useState("");
//   const [curPage, setCurrPage] = useState(1);

//   const imgInitialNum = useRef(imageNum);

//   const resultsPerPage = 8;

//   const start = (curPage - 1) * resultsPerPage;
//   const end = curPage * resultsPerPage;
//   const pageNum = Math.ceil(blogs.length / resultsPerPage || 1);

//   return (
//     <div>
//       <div className="flex flex-col items-center mt-40 gap-16">
//         <Search search={search} setSearch={setSearch} />
//         <BlogUploadForm imgUrl={lastImage?.url} />
//       </div>

//       <div className="gap-y-24 gap-x-20 w-5/6 md:w-4/6 lg:-w-5/6 m-auto py-32 px-12 md:px-8 grid lg:grid-cols-2 justify-center">
//         {!search
//           ? blogs
//               .map((blog) => (
//                 <Blog
//                   imgUrl={blog.imgurl}
//                   title={blog.title}
//                   blog={blog.blog}
//                   id={blog.id}
//                   imgInitialNum={imgInitialNum}
//                   imageNum={imageNum}
//                   lastImage={lastImage}
//                   key={blog.id}
//                 />
//               ))
//               .slice(start, end)
//           : blogs
//               .filter((blog, i) => blog.title.toLowerCase().includes(search))
//               .map((blog, i) => (
//                 <Blog
//                   imgUrl={blog.imgurl}
//                   title={blog.title}
//                   blog={blog.blog}
//                   id={blog.id}
//                   imgInitialNum={imgInitialNum}
//                   imageNum={imageNum}
//                   lastImage={lastImage}
//                   key={blog.id}
//                 />
//               ))}
//       </div>
//       {blogs.length > resultsPerPage && (
//         <Pagination
//           pageNum={pageNum}
//           setCurrPage={setCurrPage}
//           curPage={curPage}
//         />
//       )}
//     </div>
//   );
// }

// export default BlogPosts;

"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import blog_1 from "../../public/images/blog_1.png";
import Pagination from "../Pagination";
import BlogUploadForm from "../uploads/BlogForm";

import Blog from "./Blog";
import Search from "./Search";

import { useRef, useState } from "react";

function BlogPosts({ blogs, lastImage, imageNum }) {
  const [search, setSearch] = useState("");
  const [curPage, setCurrPage] = useState(1);

  const imgInitialNum = useRef(imageNum);

  const resultsPerPage = 8;

  const start = (curPage - 1) * resultsPerPage;
  const end = curPage * resultsPerPage;
  const pageNum = Math.ceil(blogs.length / resultsPerPage || 1);
  const { user } = useUser();

  return (
    <div className="px-4 bg-gray-50 py-12 mt-20 dark:bg-gradient-to-b from-backgroundDarkblue to-[#293441]">
      <div className="flex flex-col items-center mt-16 gap-12 md:gap-16">
        <Search search={search} setSearch={setSearch} />
        {user?.nickname === "admin" && (
          <BlogUploadForm imgUrl={lastImage?.url} />
        )}
      </div>

      <div className="p-16 px-24 grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-12 md:px-12 lg:px-[26rem] lg:gap-x-40 lg:pb-48 lg:pt-28">
        {!search
          ? blogs
              .slice(start, end)
              .map((blog) => (
                <Blog
                  imgUrl={blog.imgurl}
                  title={blog.title}
                  blog={blog.blog}
                  id={blog.id}
                  imgInitialNum={imgInitialNum}
                  imageNum={imageNum}
                  lastImage={lastImage}
                  key={blog.id}
                />
              ))
          : blogs
              .filter((blog) =>
                blog.title.toLowerCase().includes(search.toLowerCase())
              )
              .slice(start, end)
              .map((blog) => (
                <Blog
                  imgUrl={blog.imgurl}
                  title={blog.title}
                  blog={blog.blog}
                  id={blog.id}
                  imgInitialNum={imgInitialNum}
                  imageNum={imageNum}
                  lastImage={lastImage}
                  key={blog.id}
                />
              ))}
      </div>
      {blogs.length > resultsPerPage && (
        <Pagination
          pageNum={pageNum}
          setCurrPage={setCurrPage}
          curPage={curPage}
        />
      )}
    </div>
  );
}

export default BlogPosts;
