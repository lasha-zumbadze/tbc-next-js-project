import styles from "./ProductDetails.module.css";

function ProductDetails({ product }) {
  return (
    <div className={styles.productDetails}>
      <img src={product.images[0]} alt="product" />
      <div className={styles.details}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{product.price}$</p>
        <button className={styles.btn}>Buy now</button>
      </div>
    </div>
  );
}

export default ProductDetails;
