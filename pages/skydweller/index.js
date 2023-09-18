import React from "react";
import styles from "../../styles/watches.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
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
      {/* META DATA */}
      <Head>
        <title>ROB DIAMOND</title>
        <meta name="description" content="Rolex Sky-Dweller" />
        <meta property="og:image" content="faviconRob.ico" />
        <meta
          name="facebook-domain-verification"
          content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
        />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

        <link rel="icon" href="/faviconRob.ico" />
      </Head>

      <div>
        <Link href={`/#`}>
          <div className={styles.backButton}>{"<"} BACK</div>
        </Link>
      </div>

      <div>
        <Image
          src={"/categoryBanner/SkyDwellerCatBanner.JPG"}
          width={2181}
          height={591}
        />
      </div>
      <h1 className={styles.headerTitle}>SKY-DWELLER</h1>

      <div className={styles.contentTopContainer}>
        <p className={styles.catDescription}>
          The Sky-Dweller is considered one of Rolex's most complex watches,
          with a combination of an annual calendar, a dual time zone display,
          and a 24-hour display.
        </p>

        {/* CTA  */}
        <div className={styles.contactDetailsBTN}>
          <a href="tel:07976753254">CALL NOW</a>
        </div>
      </div>

      {/* CTA Desktop */}
      
      <div className={styles.contactDetailsBTNDesktop}>
        <div>07976 753 254</div>    
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
    <Footer src={'/footer_image_canary_wharf.jpg'} width={3276} height={1760} />
      
    </div>
  );
}

export default skydweller;
