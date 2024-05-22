function Search({ search, setSearch }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-40">
      <input
        type="text"
        placeholder="Search blog by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-4 text-[1.6rem] w-[30rem] md:w-[40rem] rounded-md shadow-inner shadow-[#ad8f82] focus:outline-none pl-6 text-[#ad8f82] placeholder:text-[#ad8f82]"
      />
    </div>
  );
}
export default Search;
