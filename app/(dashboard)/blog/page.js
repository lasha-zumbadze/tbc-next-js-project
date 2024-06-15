import { getBlogs } from "@/app/actions/getBlogs";
import BlogPosts from "../../../components/blogs/BlogPosts";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { list } from "@vercel/blob";

async function Blogs() {
  const blogs = await getBlogs();

  async function allImages() {
    const blobs = await list();
    return blobs;
  }

  const imagesData = await allImages();
  const images = imagesData.blobs.sort((a, b) => a.uploadedAt - b.uploadedAt);
  const lastImage = images.pop();

  return (
    <>
      <Header pageClass="blogs" title="The Venue" subtitle="Blogs" />
      <main>
        <BlogPosts blogs={blogs} lastImage={lastImage} />
      </main>
      <Footer />
    </>
  );
}

export default Blogs;
