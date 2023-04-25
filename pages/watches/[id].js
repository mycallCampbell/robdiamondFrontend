import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/watchID.module.css";
import Link from "next/link";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { ProductPageContext } from "../../productPageContext";

export const getStaticPaths = async () => {
  const res = await fetch("https://www.robdiamond-be.co.uk/api/watches");
  const data = await res.json();

  const paths = data.map((path) => {
    return {
      params: { id: path._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// GET STATIC PROPS FROM BACKEND
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://www.robdiamond-be.co.uk/api/watch/" + id);

  const data = await res.json();

  return {
    props: { product: data },
    revalidate: 60,
  };
};

function WatchProductPage({ product }) {
  const [imageNumber, setImageNumber] = useState(1);
  const [added, setAdded] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [cartStorage, setCartStorage] = useState(() => {
    let storage;

    if (typeof window !== "undefined") {
      storage = localStorage.getItem("cartStorage");
    }
    return storage ? JSON.parse(storage) : [];
  });

  const [cart, setCart] = useContext(ProductPageContext);

  // USE EFFECT
  useEffect(() => {
    if (cartStorage.length > 0) {
      setCheckout(true);
    }
    localStorage.setItem("cartStorage", JSON.stringify(cartStorage));
    const storageLocal = JSON.parse(localStorage.getItem("cartStorage"));
    setCart(storageLocal);
  }, [cartStorage]);

  const productArr = Array.from(product.imageAmount);

  // const addToCart = () => {
  //   setCartStorage((cartStorage) => [...cartStorage, product]);
  //   setAdded(true);
  //   setTimeout(() => setAdded(false), 5000);
  // };

  // const handleNextSlide = () => {
  //   if (product.imageAmount > imageNumber) {
  //     setImageNumber(imageNumber + 1);
  //     console.log(imageNumber);
  //   }
  // };

  // const handlePreviousSlide = () => {
  //   if(imageNumber !== 1){
  //     setImageNumber(imageNumber - 1);
  //   }
  // }

  return (
    <div className={styles.container}>
      <Link href={`/${product.model}`}>
        <div className={styles.breadcrumb}>{"<"} BACK</div>
      </Link>
      <div className={styles.title}>
        <h2>{product.title}</h2>
      </div>

      <main className={styles.mainContainer}>
        {/* GRID ITEM 1 */}
        <div className={styles.imageContainer}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className={styles.swiper}
          >
            <div
              className={styles.previousSlide}
              onClick={(e) => handleClick(e)}
            >
              <Image src={"/leftArrow.svg"} width={35} height={35} />
            </div>

            <div className={styles.nextSlide} onClick={(e) => handleClick(e)}>
              <Image src={"/rightArrow.svg"} width={35} height={35} />
            </div>
            <div className={styles.swiperWrapper}>
              {productArr.map((item, index) => (
                <SwiperSlide className={styles.swiperSlide} key={index}>
                  <Image
                    src={`/watches/${product.model}${product.ref}${
                      product.strap
                    }${product.dial}/${product.ref}${product.model}${
                      index + 1
                    }.JPG`}
                    width={1680}
                    height={1120}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        {/* GRID ITEM 2 */}
        <div className={styles.productContent}>
          <div className={styles.descriptionSmallContainer}>
            <p>{product.descriptionSmall}</p>
          </div>
          <div className={styles.price}>PRICE: £{product.price1}</div>

          <div className={styles.space}></div>
          <div className={styles.productDescription}>{product.description}</div>

          <div className={styles.callForDetailsBTN}>
            <h4>
              <a href="tel:07976753254">CALL FOR DETAILS</a>
            </h4>
          </div>
          <div className={styles.whatsAppBTN}>
            <Link
              href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
            >
              <h4>WHATSAPP</h4>
            </Link>
          </div>
        </div>
      </main>

      {/* SPECIFICATION */}

      <div className={styles.specContainer}>
        <div className={styles.label}>Model</div>
        <div className={styles.labelDescription}>{product.model}</div>

        <div className={styles.label}>Reference</div>
        <div className={styles.labelDescription}>{product.ref}</div>

        <div className={styles.label}>Year</div>
        <div className={styles.labelDescription}>{product.year1}</div>

        <div className={styles.label}>Warranty</div>
        <div className={styles.labelDescription}>{product.warranty}</div>

        <div className={styles.label}>Box and Papers</div>
        <div className={styles.labelDescription}>{product.boxAndPapers}</div>

        <div className={styles.label}>Available</div>
        <div className={styles.labelDescription}>{product.availble}</div>

        <div className={styles.label}>Case Material</div>
        <div className={styles.labelDescription}>{product.caseMaterial}</div>

        <div className={styles.label}>Bracelet Material</div>
        <div className={styles.labelDescription}>
          {product.braceletMaterial}
        </div>

        <div className={styles.label}>Dial</div>
        <div className={styles.labelDescription}>{product.dial}</div>
      </div>

      <Footer src={"/rolexGoldFooter.JPG"} width={3360} height={2240} />
    </div>
  );
}

export default WatchProductPage;
