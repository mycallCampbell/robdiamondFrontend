import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/landingSkyDweller.module.css";
import Link from "next/link";
import Slider from "../components/Slider";

export default function landingSkyDweller() {
  return (
    <>
      <div>
        {/* META */}
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

      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          UPDATED: 13TH JUNE 2023 - 03:10
        </div>
      </div>

      {/* HERO SECTION MOBILE */}
      <div className={styles.heroMobile}>
        <Image
          src={"/sky_dweller_highlights_landing.JPG"}
          width={3360}
          height={1506}
        />
      </div>

      {/* HERO SECTION DESKTOP */}
      {/* <div className={styles.gridContainerHero}> */}
      <div className={styles.heroContentContainer}>
        <div className={styles.heroDesktop}>
          <Image
            src={"/sky_dweller_highlights_landing_trimmed.JPG"}
            width={3330}
            height={1089}
          />
        </div>
        <div className={styles.headlineContentLeft}>Discover Time Mastery</div>
        <div className={styles.headlineContentRight}>
          Unleash The Extrodinary
        </div>
      </div>

      <div className={styles.titleSkyDweller}>The Rolex SkyDweller</div>

      {/* CONTACT BTN */}
      <div className={styles.contactBTNContainer}>
        <div></div>
        <div className={styles.contactBTN}>
          <a href="tel:07976753254">Contact</a>
        </div>
        <div></div>
      </div>

      {/* <div className={styles.heroBGContentContainer}>
          <Image src={"/landing_bg_content.JPG"} width={3360} height={1506} />
          <div className={styles.heroBGContent}>
            <div className={styles.headlineContent}>Discover Time Mastery</div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
}
