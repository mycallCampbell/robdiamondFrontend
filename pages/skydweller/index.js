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
        <meta property="og:image" content="favicon.png" />
        <meta
          name="facebook-domain-verification"
          content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
        />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <Link href={`/#`}>
          <div className={styles.backButton}>{"<"} BACK</div>
        </Link>
        <h1 className={styles.headerTitle}>Sky-Dweller</h1>
      </div>

      <div>
        <Image
          src={"/categoryBanner/SkyDwellerCatBanner.JPG"}
          width={2181}
          height={591}
        />
      </div>
      <p className={styles.catDescription}>
        The Sky-Dweller is considered one of Rolex's most complex watches, with
        a combination of an annual calendar, a dual time zone display, and a
        24-hour display.
      </p>

      {/* CTA  */}
      <div className={styles.viewDetailsBTN}>
        <a href="tel:07976753254">CALL NOW</a>
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
