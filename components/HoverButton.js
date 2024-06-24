function HoverButton({ children, width }) {
  return (
    <div
      className={`border-solid border-textGolden border-[1px] text-3xl lg:block text-center px-8 py-6 relative  w-${
        width || "96"
      } h-[5.5rem]`}
    >
      <div
        className={`border-solid border-textGolden border-[1px] text-3xl lg:block text-center absolute w-${
          width || "96"
        } h-[5.5rem] top-2 left-2 hover:top-0 hover:left-0 transition-all hover:border-white`}
      ></div>
      {children}
    </div>
  );
}

export default HoverButton;
