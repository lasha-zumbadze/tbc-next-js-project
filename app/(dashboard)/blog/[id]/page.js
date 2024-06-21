import { getBlog } from "@/app/actions/getBlog";
import BlogDetails from "@/components/BlogDetails";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

async function BlogDetailsPage({ params }) {
  const { id } = params;
  const blog = await getBlog(id);

  return (
    <>
      <Header pageClass="menu" title="KoKeshI" subtitle="Blogs" />

      <div className="flex flex-col justify-center items-center bg-gray-100 relative">
        <div className="flex justify-center items-center gap-4 self-start text-4xl absolute top-24 left-24 border-b-2 border-[#c8a97e] pb-2">
          <FaArrowLeftLong />
          <Link href="/blogs">Go back</Link>
        </div>
        <BlogDetails blog={blog} />
      </div>
      <Footer />
    </>
  );
}

export default BlogDetailsPage;
