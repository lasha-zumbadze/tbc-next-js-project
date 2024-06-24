import { getBlogs } from "@/app/actions/getBlogs";
import BlogPosts from "../../../components/blogs/BlogPosts";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { list } from "@vercel/blob";
import Decor from "@/components/Decor";

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
    <div className="dark:bg-backgroundDarkblue">
      <Header pageClass="blogs" title="KoKeshI" subtitle="Blogs" />
      <div className="flex flex-col md:flex-row gap-16 justify-center items-center mt-[6rem] py-8">
        <Decor />
        <div className="flex flex-col items-center">
          <h1 className="font-alexBrush text-7xl md:text-[5rem] text-[#a68250]">
            KoKeshI
          </h1>
          <h2 className="text-7xl md:text-[5rem] -mt-4 italic dark:text-white">
            Blogs
          </h2>
        </div>
        <Decor />
      </div>
      <main>
        <BlogPosts
          blogs={blogs}
          lastImage={lastImage}
          imageNum={images.length}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Blogs;
