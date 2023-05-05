import React from "react";
import styles from "../../styles/watches.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/Footer";

export const getStaticProps = async () => {
  const data = await fetch(
    "https://www.robdiamond-be.co.uk/api/watchesModelGMT-MasterII"
  );
  const products = await data.json();

  return {
    props: {
      products: products,
    },
    revalidate: 60,
  };
};

function GMTMasterII({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ROB DIAMOND</title>
        <meta name="description" content="Rolex GMT Master II" />
        <meta property="og:image" content="rob_diamond_logo.png" />
        <meta
          name="facebook-domain-verification"
          content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
        />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

        <link rel="icon" href="/rob_diamond_logo.png" />
      </Head>
      <Link href={`/#`}>
        <div className={styles.backButton}>{"<"} BACK</div>
      </Link>

      <div>
        <Image
          src={"/categoryBanner/gmtMasterIICatBanner.JPG"}
          width={2181}
          height={591}
        />
      </div>

      <h1 className={styles.headerTitle}>GMT-MASTER II</h1>

      <div className={styles.contentTopContainer}>
        <p className={styles.catDescription}>
          The Rolex GMT-Master II 42mm. With Oyster and Jubilee bracelets
          available, this watch is a perfect blend of luxury and functionality.
          Highly sought-after by watch enthusiasts and collectors, the
          GMT-Master II 42mm is a true icon of the Rolex brand.
        </p>

        {/* CTA  */}
        <div className={styles.viewDetailsBTNHeader}>
          <a href="tel:07976753254">CALL NOW</a>
        </div>
      </div>

      {/* MAIN */}
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
            {/* <Link href={`/watches/${[product._id]}`}>
              <div className={styles.viewDetailsBTN}>
                <h4>VIEW BLOG</h4>
              </div>
            </Link> */}
          </div>
        ))}
      </main>
      <Footer src={"/footer_rose.JPG"} width={3360} height={2240} />
    </div>
  );
}

export default GMTMasterII;
