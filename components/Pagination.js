import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

function Pagination({ pageNum, setCurrPage, curPage, color, darkColor }) {
  function scrollToTop() {
    window.scrollTo({ top: 50, behavior: "smooth" });
  }

  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id)
  //   element?.scrollIntoView({ behavior: "smooth"});
  // };

  return (
    <div className="flex justify-center pt-24 pb-16">
      <div className="flex gap-8">
        {pageNum !== 1 && (
          <div className="flex items-center">
            <div
              onClick={() => {
                scrollToTop();
                setCurrPage(1);
              }}
              className="text-5xl text-[#98713b] cursor-pointer"
            >
              <MdKeyboardDoubleArrowLeft />
            </div>
            <div
              onClick={() => {
                if (curPage > 1) setCurrPage(curPage - 1);
              }}
              className="text-5xl text-[#98713b] cursor-pointer"
            >
              <MdKeyboardArrowLeft />
            </div>
          </div>
        )}
        <div>
          {Array.from({ length: pageNum }, (_, i) => (
            <button
              key={i}
              onClick={(e) => {
                setCurrPage(e.target.value);
              }}
              value={i + 1}
              className={`w-12 h-12 text-3xl rounded-full ${
                +curPage === i + 1 ? "bg-[#c8a97e] text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        {pageNum !== 1 && (
          <div className="flex items-center">
            <div
              onClick={() => {
                if (curPage < pageNum) setCurrPage(curPage + 1);
              }}
              className="text-5xl text-[#98713b] cursor-pointer"
            >
              <MdKeyboardArrowRight />
            </div>
            <div
              onClick={() => setCurrPage(pageNum)}
              className="text-5xl text-[#98713b] cursor-pointer"
            >
              <MdKeyboardDoubleArrowRight />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pagination;
