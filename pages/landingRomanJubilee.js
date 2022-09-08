import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import heroImage from "../public/heroImageCrop.jpeg";
import numeralMarkers from "../public/numeralMarkersImage.jpeg";
import rolexBox from "../public/rolexBoxBG.jpeg";
import styles from "../styles/landingRomanOyster.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../components/Footer";

const product = [
  "wimbledonOysterRoman1",
  "wimbledonOysterRoman2",
  "wimbledonOysterRoman3",
  "wimbledonOysterRoman4",
  "wimbledonOysterRoman5",
  "wimbledonOysterRoman6",
];

const product2 = ["clasp1", "clasp2"];

function landingRomanJubilee() {
  return (
    <>
      <Head>
        <title>ROB DIAMOND</title>
        <meta name="description" content="DATEJUST 41" />
        <meta property="og:image" content="favicon.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Image src={heroImage} width={819} height={793} />
      <div className={styles.container}>
        <div className={styles.title}>DATEJUST 41 </div>
        <div className={styles.subTitle}>Wimbledon Oyster </div>
        <div className={styles.ref}>REF: 126331</div>
        <div className={styles.heroBtn}>
          <a href="tel:07976753254">CALL NOW</a>
        </div>

        <div className={styles.heroBtn}>
          <Link
            href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
          >
            WHATSAPP
          </Link>
        </div>
        <div className={styles.tag}>
          This Oyster Perpetual Datejust 41 in Oystersteel and Everose gold
          features a slate dial and an Oyster bracelet.
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
                    src={`/wimbledonOysterRoman/${item}.jpeg`}
                    width={768}
                    height={1024}
                  />
                  )
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className={styles.location}>
          Situated in the Iconic Hatton Garden, London
        </div>
        <div className={styles.heroBtn}>
          <a href="tel:07976753254">CONTACT FOR DETAILS</a>
        </div>

        <div className={styles.intro}>
          One of the most sought after Rolex models on the market. This 2022
          DATEJUST 41 comes with an 18k EverRose Gold, Fluted Bezel in keeping
          with the original design and a beautiful slate dial with the very
          unique Rolex <span>&apos;Money Green&apos;</span>, illuminescent Roman
          Numeral numeber markers.
        </div>
        <div className={styles.numeralMarkerImage}>
          <Image src={numeralMarkers} width={819} height={1024} />
        </div>

        <div className={styles.intro}>
          Once again, Rolex have pulled off a master piece with this design by
          keeping the defining horological hallmarks of the Rolex Wimbledon
          Oyster and combining them with just the right amount of up-to-date
          features to show off their craftsmanship as one of the leading watch
          makers in the world. <span>&apos;Money Green&apos;</span> Roman
          Numeral Number Markers.... Only Rolex can pull this off!
        </div>
        <div className={styles.rolexBox}>
          <Image src={rolexBox} width={819} height={845} />
        </div>
        <div className={styles.heroBtn}>
          <Link href={"/watches"}>SEE MORE</Link>
        </div>
        <div className={styles.intro}>
          The Bi-colour Oyster Bracelet is the perfect mix of form and function,
          aesthetics and technology, designed to be both robust and comfortable.
          It is equipped with the Oysterclasp and the Easylink comfort extension
          link which is exclusive to Rolex. The unique design allows for the
          wearer to adjust the size of the bracelet to your requirements.
        </div>
        <div className={styles.imageContainer}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className={styles.swiper}
          >
            <div className={styles.swiperWrapper}>
              {product2.map((item, index) => (
                <SwiperSlide className={styles.swiperSlide} key={index}>
                  <Image
                    src={`/clasp/${item}.jpeg`}
                    width={819}
                    height={1024}
                  />
                  )
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className={styles.intro}>
          RobDiamond is one of London&apos;s leading watch traders and is
          situated in Hatton Garden, London. Viewings are recommended by
          appointment, although please feel welcome to pop in and browse our
          sought after collection.
        </div>
        <div className={styles.heroBtn}>
          <Link
            href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
          >
            WHATSAPP
          </Link>
        </div>
      </div>
      <Footer src={"/rolexFooter.jpg"} width={1704} height={700} />
    </>
  );
}

export default landingRomanJubilee;
