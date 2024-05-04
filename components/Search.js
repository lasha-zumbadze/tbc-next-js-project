import styles from "./Search.module.css";

function Search({ search, setSearch }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search blog by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
export default Search;
