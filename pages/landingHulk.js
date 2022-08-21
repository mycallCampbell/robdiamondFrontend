import React from "react";
import Image from "next/image";
import hulk from "../public/hulk.jpg";
import styles from "../styles/landingHulk.module.css";
import theHulk from "../public/the-hulk.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../components/Footer";

const product = [
  "SubmarinerHulk1",
  "SubmarinerHulk2",
  "SubmarinerHulk3",
  "SubmarinerHulk4",
  "SubmarinerHulk5",
  "SubmarinerHulk6",
  "SubmarinerHulk7",
];

function landingHulk() {
  return (
    <>
      <Image src={hulk} width={1200} height={1200} />
      <div className={styles.container}>
        <div className={styles.title}>The Rolex Submariner 116610LV</div>
        <div className={styles.subTitle}>AKA &quot;THE HULK&quot;</div>
        <div className={styles.heroBtn}>
          <a>CALL FOR ADVICE</a>
        </div>
        <div className={styles.intro}>
          Discontinued in 2017, the <span>&apos;Money Green&apos;</span> Rolex
          Submariner Hulk is one of the most sought after wrist watches of our
          time. Whenever Rolex discontinue a model from their custom collection
          we immediately see the creation of an investment piece. Both in terms
          of finance and allure!
        </div>
        <div className={styles.imageContainer}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className={styles.swiper}
          >
            <div className={styles.swiperWrapper}>
              {product.map((item, index) => (
                <SwiperSlide className={styles.swiperSlide} key={index}>
                  <Image
                    src={`/SubmarinerHulk/${item}.jpeg`}
                    width={768}
                    height={1024}
                  />
                  )
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className={styles.heroBtn}>
          <a>CONTACT FOR DETAILS</a>
        </div>
        <Image src={theHulk} width={1200} height={1200} />
      </div>
      <Footer src={"/rolexFooter.jpg"} width={1704} height={700} />
    </>
  );
}

export default landingHulk;
