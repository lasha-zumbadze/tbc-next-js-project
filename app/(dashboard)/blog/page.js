import { getBlogs } from "@/app/actions/getBlogs";
import BlogPosts from "../../../components/blogs/BlogPosts";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { list } from "@vercel/blob";

async function Blogs() {
  const blogsData = await getBlogs();
  const blogs = blogsData.sort((a, b) => a.id - b.id);

  async function allImages() {
    const blobs = await list();
    return blobs;
  }

  const imagesData = await allImages();
  const images = imagesData.blobs.sort((a, b) => a.uploadedAt - b.uploadedAt);
  const lastImage = images.pop();

  return (
    <>
      <Header pageClass="blogs" title="KoKeshI" subtitle="Blogs" />
      <main>
        <BlogPosts
          blogs={blogs}
          lastImage={lastImage}
          imageNum={images.length}
        />
      </main>
      <Footer />
    </>
  );
}

export default Blogs;
