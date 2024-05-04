import Link from "next/link";
import styles from "./Product.module.css";

function Product({ id, imgUrl, title, descr, price }) {
  return (
    <div className={styles.productCart}>
      {imgUrl && <img src={imgUrl} alt="blog" />}

      <h2>
        <Link href={`products/${id}`}>{title}</Link>
      </h2>
      <p>{descr}</p>
      {price && <p>{price}$</p>}
      <button className={styles.view}>Add to store</button>
    </div>
  );
}

export default Product;
