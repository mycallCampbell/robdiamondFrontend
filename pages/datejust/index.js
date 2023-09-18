import React from "react";
import styles from "../../styles/watches.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/Footer";

export const getStaticProps = async () => {
  const data = await fetch(
    "https://www.robdiamond-be.co.uk/api/watchesModelDateJust"
  );
  const products = await data.json();

  return {
    props: {
      products: products,
    },
    revalidate: 60,
  };
};

function datejust({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ROB DIAMOND</title>
        <meta name="description" content="Rolex datejust" />
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

      {/* BANNER */}
      <div>
        <Image
          src={"/categoryBanner/datejustCatBanner.JPG"}
          width={2181}
          height={591}
        />
      </div>

      <h1 className={styles.headerTitle}>DATEJUST</h1>

      <div className={styles.contentTopContainer}>
        <p className={styles.catDescription}>
          The Rolex Datejust 41mm, a timeless classic that blends elegance with
          functionality. An exceptional watch that never goes out of style.
          Available with both Oyster and Jubilee bracelets and renowned for its
          popularity among watch enthusiasts and collectors.
        </p>
        
        {/* CTA  */}
        <div className={styles.contactDetailsBTN}>
          <a href="tel:07976753254">CALL NOW</a>
        </div>
      </div>

      {/* CTA Desktop */}
      
          <div className={styles.contactDetailsBTNDesktop}>
            07976 753 254    
          </div>
            
      {/* MAIN  */}
      <main className={styles.mainContainer}>
        {products.map((product) => (
          <div
            className={styles.productContainer}
            key={product._id}
            id={product.image}
          >
            <h2 className={styles.productTitle}>{product.title}</h2>
            <div className={styles.imageContainer}>
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
    <Footer src={'/footer_image_canary_wharf.jpg'} width={3276} height={1760} />
    </div>
  );
}

export default datejust;
