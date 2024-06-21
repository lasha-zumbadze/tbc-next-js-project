import { getBlogs } from "@/app/actions/getBlogs";
import Heading from "./Heading";
import { list } from "@vercel/blob";
import BlogPostsForHomePage from "./blogs/BlogPostsForHomePage";

async function BlogSection() {
  const blogsData = await getBlogs();
  const blogs = blogsData.slice(0, 3);

  async function allImages() {
    const blobs = await list();
    return blobs;
  }

  const imagesData = await allImages();
  const images = imagesData.blobs.sort((a, b) => a.uploadedAt - b.uploadedAt);
  const lastImage = images.pop();

  return (
    <div className="flex flex-col items-center py-32 bg-gradient-to-b from-[#293441] to-backgroundDarkblue">
      <Heading gap={16} minHeight={16}>
        <h1 className=" text-8xl md:text-9xl text-[#a68250]">THE BLOG</h1>
      </Heading>
      <div>
        <BlogPostsForHomePage
          blogs={blogs}
          lastImage={lastImage}
          imageNum={images.length}
        />
      </div>
    </div>
  );
}

export default BlogSection;
