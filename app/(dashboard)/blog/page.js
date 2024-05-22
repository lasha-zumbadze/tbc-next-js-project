import BlogPosts from "../../../components/blogs/BlogPosts";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { getBlogs } from "@/api";

async function Blogs() {
  const blogs = await getBlogs();

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
