import React from "react";
import styles from "../../styles/watches.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/Footer";

export const getStaticProps = async () => {
  const data = await fetch("https://www.robdiamond-be.co.uk/api/watches");
  const products = await data.json();

  return {
    props: {
      products: products,
    },
    revalidate: 60,
  };
};

function watches({ products }) {
  return (
    <div className={styles.container}>
      {/* META DATA */}
      <Head>
        <title>ROB DIAMOND</title>
        <meta name="description" content="Rolex Watches" />
        <meta property="og:image" content="rob_diamond_logo.png" />
        <meta
          name="facebook-domain-verification"
          content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
        />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

        <link rel="icon" href="/rob_diamond_logo.png" />
      </Head>

      {/* TITLE */}
      <div className={styles.title}>
        <h1>ROLEX</h1>
      </div>

      {/* PRODUCT  */}
      <main className={styles.mainContainer}>
        {products.map((product) => (
          <div
            className={styles.productContainer}
            key={product._id}
            id={product.image}
          >
            <h2 className={styles.productTitle}>{product.title}</h2>
            <div>
              <Image
                src={`/watches/${product.model}${product.ref}${product.strap}${product.dial}/${product.ref}${product.model}1.JPG`}
                width={1680}
                height={1120}
              />
            </div>
            <Link href={`/watches/${[product._id]}`}>
              <div className={styles.viewDetailsBTN}>
                <h4>VIEW DETAILS</h4>
              </div>
            </Link>
          </div>
        ))}
      </main>
      <Footer src={"/rolexFooter.jpg"} width={1704} height={700} />
    </div>
  );
}

export default watches;
