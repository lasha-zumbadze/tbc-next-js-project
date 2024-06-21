function Heading({ children, gap, minHeight }) {
  return (
    <div className={`flex justify-center items-center gap-${gap}`}>
      <div className="flex gap-4 items-center">
        <div className={`h-${minHeight} w-[2px] bg-textGolden`}></div>
        <div className={`h-${minHeight + 4} w-[3px] bg-textGolden`}></div>
        <div className={`h-${minHeight + 8} w-[4px] bg-textGolden`}></div>
      </div>
      {children}
      <div className="flex gap-4 items-center">
        <div className={`h-${minHeight + 8} w-[4px] bg-textGolden`}></div>
        <div className={`h-${minHeight + 4} w-[3px] bg-textGolden`}></div>
        <div className={`h-${minHeight} w-[2px] bg-textGolden`}></div>
      </div>
    </div>
  );
}

export default Heading;
