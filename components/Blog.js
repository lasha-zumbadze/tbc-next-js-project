import styles from "./Blog.module.css";
import Image from "next/image";

function Blog({ imgUrl, title, blog }) {
  return (
    <div className={styles.blogCart}>
      <Image src={imgUrl} alt="blog" />
      <h2>{title}</h2>
      <p>{blog}</p>
      <button className={styles.view}>Read more</button>
    </div>
  );
}

export default Blog;
