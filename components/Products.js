import styles from "./Products.module.css";
import Product from "./Product";

function Products({ products }) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product
          id={product.id}
          imgUrl={product.images[0]}
          title={product.title}
          descr={product.description}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default Products;
