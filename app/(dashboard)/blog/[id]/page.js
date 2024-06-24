import { getBlog } from "@/app/actions/getBlog";
import BlogDetails from "@/components/BlogDetails";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

async function BlogDetailsPage({ params }) {
  const { id } = params;
  const blog = await getBlog(id);

  return (
    <>
      <Navigation />

      <div className="flex flex-col justify-center bg-gray-100 relative bg-contactForm bg-no-repeat bg-cover bg-center mt-36">
        <div className="flex justify-center items-center gap-4 self-start text-4xl absolute top-24 left-24 border-b-2 border-[#c8a97e] pb-2 text-white">
          <FaArrowLeftLong />
          <Link href="/blog">Go back</Link>
        </div>
        <BlogDetails blog={blog} />
      </div>
      <Footer />
    </>
  );

  // return (
  //   <>
  //     <Header pageClass="menu" title="KoKeshI" subtitle="Blogs" />

  //     <div className="flex flex-col justify-center items-center bg-gray-100 relative">
  //       <div className="flex justify-center items-center gap-4 self-start text-4xl absolute top-24 left-24 border-b-2 border-[#c8a97e] pb-2">
  //         <FaArrowLeftLong />
  //         <Link href="/blogs">Go back</Link>
  //       </div>
  //       <BlogDetails blog={blog} />
  //     </div>
  //     <Footer />
  //   </>
  // );
}

export default BlogDetailsPage;
