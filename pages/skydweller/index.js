import React from "react";
import styles from "../../styles/watches.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export const getStaticProps = async () => {
  const data = await fetch(
    "https://www.robdiamond-be.co.uk/api/watchesModelSkyDweller"
  );
  const products = await data.json();

  return {
    props: {
      products: products,
    },
    revalidate: 60,
  };
};

function skydweller({ products }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Sky-Dweller</h1>
      </div>
      {products.map((product) => (
        <div
          className={styles.productContainer}
          key={product._id}
          id={product.image}
        >
          <h2>{product.title}</h2>
          <div>
            <Image
              src={`/watches/${product.model}${product.ref}/${product.ref}${product.model}1.JPG`}
              width={1680}
              height={1120}
            />
          </div>
          <Link href={`/watches/${[product._id]}`}>
            <div className={styles.viewDetailsBTN}>
              <h4>VIEW DETAILS</h4>
            </div>
          </Link>
          <Link href={`/watches/${[product._id]}`}>
            <div className={styles.viewDetailsBTN}>
              <h4>VIEW BLOG</h4>
            </div>
          </Link>
        </div>
      ))}
      <Footer src={"/footer_rose.JPG"} width={3360} height={2240} />
    </div>
  );
}

export default skydweller;
