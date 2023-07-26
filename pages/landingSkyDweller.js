import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/landingSkyDweller.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const skyDwellerImages = [
  "/skydweller326934jubileeblue/326934skydweller1.JPG",
  "/skydweller326934jubileeblue/326934skydweller2.JPG",
  "/skydweller326934jubileeblue/326934skydweller3.JPG",
  "/skydweller326934jubileeblue/326934skydweller4.JPG",
];

export default function landingSkyDweller() {
  return (
    <>
      <div>
        {/* META SECTION*/}
        <Head>
          <title>ROB DIAMOND</title>
          <meta name="description" content="Rolex SkyDweller Landing Page" />
          <meta property="og:image" content="faviconRob.ico" />
          <meta
            name="facebook-domain-verification"
            content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
          />
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

          <link rel="icon" href="/faviconRob.ico" />
        </Head>
      </div>

      {/* TOP BAR SECTION*/}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          UPDATED: 25th 2023 - 12:06
        </div>
      </div>

      <section className={styles.heroSection}>

        {/* HERO SECTION MOBILE */}
        <div className={styles.heroMobile}>
          <Image
            src={"/hero_image_template.jpg"}
            width={1200}
            height={602}
          />
        </div>

        {/* HERO SECTION DESKTOP */}
        <div className={styles.heroDesktop}>
          <Image
            src={"/sky_dweller_highlights_landing_trimmed.JPG"}
            width={3330}
            height={1089}
          />
        </div>

        <div className={styles.contentMainHeroContainer}>
          <div className={styles.headlineContentMain}>
            Discover Time Mastery
          </div>
          <div className={styles.headlineContentSub}>
            Unleashing The Extrodinary
          </div>
        </div>

      </section>

        <div className={styles.titleSkyDweller}>The Rolex SkyDweller</div>
        <div className={styles.refSkyDweller}>Reference: 326934</div>
      

        <div className={styles.gridContainerContactBTN}>
          <div></div>
          <div className={styles.contactBTNDesktop}>
            <div className={styles.contactImage}>
              <Image src={"/call.png"} width={25} height={25} />
            </div>
            <div>
              <a href="tel:07976753254">Contact</a>
            </div>
          </div>
          <div></div>
        </div>
      

      {/* SWIPER */}

      <section className={styles.swiperContainer}>
        <div className={styles.imageContainer}>
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles.swiper}
          >
            <div className={styles.swiperWrapper}>
              {skyDwellerImages.map((item, index) => (
                <SwiperSlide className={styles.swiperSlide} key={index}>
                  <Image
                    src={`/watches${item}`}
                    width={1680}
                    height={1120}
                    className={styles.swiperImage}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        <div className={styles.detailsContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.titleSwiper}>
              Elevating Horological Excellence
            </div>
            <div className={styles.contentSwiper}>
              One of the standout features of the Sky-Dweller is its dual time
              zone function, allowing travelers to easily keep track of time in
              two different time zones simultaneously.
            </div>
            <div className={styles.contentSwiper}>
              The watch incorporates an annual calendar complication, which
              automatically adjusts for months with 30 and 31 days, requiring
              adjustment only once a year.
            </div>
            <div className={styles.contentSwiper}>
              It is powered by Rolex's Caliber 9001 movement, a self-winding
              mechanical movement known for its precision and reliability.
            </div>
            {/* DESKTOP */}
            {/* <div className={styles.contentSwiper}>
              The Sky-Dweller features an innovative Ring Command bezel,
              allowing users to easily set and adjust various functions of the
              watch using the rotating bezel.
            </div> */}
          </div>
        </div>
      </section>

      <section>
        <div className={styles.contentRobDiamond}>
          <span>Rob Diamond</span> is a renowned authority in the realm of luxury timepieces,
          with an exceptional focus on Rolex watches. Recognized as one of the
          leading experts in the field, his expertise and knowledge extend
          particularly to the iconic Rolex Sky-Dweller collection. With an
          unwavering passion for horology and an insatiable curiosity, Rob
          Diamond has dedicated countless hours to studying and dissecting every
          intricate detail of the Rolex Sky-Dweller. His profound understanding
          of its complex complications, such as the dual time zone feature and
          annual calendar, is unparalleled. Through his meticulous research and
          hands-on experience.
        </div>
      </section>


      {/* SPEC SECTION */}
      <section>
        <div className={styles.imageSpecContainer}>
          <Image
            src={"/image_spec_banner.JPG"}
            width={3357}
            height={1725}
            className={styles.imageSpecBanner}
          />
          <div className={styles.contentSpecContainer}>
            <div className={styles.specTitle}>Specification</div>
            <div className={styles.specContainer}>
              <div className={styles.specKey}>
                <div>Model</div>
                <div>Reference</div>
                <div>Strap</div>
                <div>Dial</div>
                <div>Movement</div>
                <div>Case Material</div>
                <div>Bracelet Material</div>
                <div>Bezel</div>
              </div>

              <div className={styles.specValue}>
                <div>SkyDweller</div>
                <div>326934</div>
                <div>Oyster</div>
                <div>Blue 42mm</div>
                <div>Automatic</div>
                <div>Stainless Steel</div>
                <div>Stainless Steel</div>
                <div>White Gold</div>
              </div>
            </div>
            <div className={styles.numbreContactBTN}>07976 753 254</div>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION SECTION */}
      <section>
        <div className={styles.gridContainerSubscription}>
          <div className={styles.subscriptionContent}>
            <div className={styles.subscriptionTitle}>SUBSCRIPTION</div>
            Enter Your Email Address to recieve our latest updates on Guides and
            Blogs
          </div>
          <div className={styles.subscriptionContainer}>
            <div className={styles.subscriptionEmailContent}>
              Enter Your Email Address
            </div>
            <div className={styles.subscriptionArrow}>
              <Image
                src={"/right-arrow-white.png"}
                className={styles.whiteArrow}
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContentContainerColumn}>
            <Link href={"#"}>
              <div className={styles.contentItemColumn}>Contact</div>
            </Link>
            <Link href={"#"}>
              <div className={styles.contentItemColumn}>Returns</div>
            </Link>
            <Link href={"#"}>
              <div className={styles.contentItemColumn}>Reviews</div>
            </Link>
          </div>
          <div className={styles.instagramIcon}>
            <Link href={"#"}>
              <Image src={"/instagram-white.png"} width={32} height={32} />
            </Link>
          </div>
          <div className={styles.footerContentContainerRow}>
            <Link href={"#"}>
              <div className={styles.contentItemRow}>Terms and Conditions</div>
            </Link>
            <Link href={"#"}>
              <div className={styles.contentItemRow}>FAQs</div>
            </Link>
            <Link href={"#"}>
              <div className={styles.contentItemRow}>Privacy Policy</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
