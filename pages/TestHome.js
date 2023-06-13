import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/TestHome.module.css";
import Link from "next/link";
import Slider from "../components/Slider";

export default function TestHome() {
  return (
    <>
      <div>
{/* META */}
        <Head>
          <title>ROB DIAMOND</title>
          <meta name="description" content="Rolex Specialistss" />
          <meta property="og:image" content="faviconRob.ico" />
          <meta
            name="facebook-domain-verification"
            content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
          />
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

          <link rel="icon" href="/faviconRob.ico" />
        </Head>
      </div>

      <div className={styles.topBar}>{/* <Slider /> */}</div>

{/* HERO SECTION */}
      <div>
        <Image src={"/hero_daytona.JPG"} width={3360} height={2240} />
      </div>

{/* CTA CONTACT */}
      <div className={styles.contactBTN}>Contact</div>

      <section className={styles.mainContainer}>
        <div className={styles.categoryTitle}>CATEGORIES</div>
        <div className={styles.gridContainerCategories}>
          <Link href={"/datejust"}>
            <>
              <div className={styles.categoryGrid}>
                <div className={styles.categoryImageContainer}>
                  <Image
                    src={`/watches/datejust126231jubileewimbledon/126231datejust1.JPG`}
                    width={840}
                    height={560}
                    className={styles.categoryImage}
                  />
                </div>
                <div className={styles.contentBG}>
                  <div className={styles.contentRolexContainer}>
                    <p className={styles.rolex}>Rolex</p>
                    <p className={styles.category}>DateJust</p>
                  </div>
                </div>
              </div>
            </>
          </Link>

          <Link href={"/daydate"}>
            <div className={styles.categoryGrid}>
              <div className={styles.categoryImageContainer}>
                <Image
                  src={`/watches/daydate228349RBRpresidentialolive/228349RBRdaydate1.JPG`}
                  width={840}
                  height={560}
                  className={styles.categoryImage}
                />
              </div>
              <div className={styles.contentBG}>
                <div className={styles.contentRolexContainer}>
                  <p className={styles.rolex}>Rolex</p>
                  <p className={styles.category}>DayDate</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href={"/GMT-MasterII"}>
            <div className={styles.categoryGrid}>
              <div className={styles.categoryImageContainer}>
                <Image
                  src={`/watches/GMT-MasterII126711CHNRoysterblack/126711CHNRGMT-MasterII1.JPG`}
                  width={840}
                  height={560}
                  className={styles.categoryImage}
                />
              </div>
              <div className={styles.contentBG}>
                <div className={styles.contentRolexContainer}>
                  <p className={styles.rolex}>Rolex</p>
                  <p className={styles.category}>GMT-Master II</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href={"/datejust"}>
            <>
              <div className={styles.categoryGrid}>
                <div className={styles.categoryImageContainer}>
                  <Image
                    src={`/watches/datejust126231jubileewimbledon/126231datejust1.JPG`}
                    width={840}
                    height={560}
                    className={styles.categoryImage}
                  />
                </div>
                <div className={styles.contentBG}>
                  <div className={styles.contentRolexContainer}>
                    <p className={styles.rolex}>Rolex</p>
                    <p className={styles.category}>DateJust</p>
                  </div>
                </div>
              </div>
            </>
          </Link>
        </div>

{/* CTA VIEW ALL */}
          <div className={styles.viewAllBTN}>View All</div>
          <div className={styles.categoryTitle}>HIGHLIGHTS</div>

          <div className={styles.highlightImageContainer}>
            <Image src={'/sky_dweller_highlights.JPG'} className={styles.highlightImage} width={3320} height={2240} />
          </div>
          <div className={styles.highlightContentRolex}>Rolex</div>
          <div className={styles.highlightContentModel}>Sky Dweller</div>
          <div className={styles.highlightContent}>Lorem ipsum dolor sit amet. Eum labore quos non soluta deleniti et voluptates maiores a impedit corporis hic iusto aliquam sit optio quas aut sint autem. Et nihil nostrum sit cumque minima ex aliquid vero est galisum cumque.</div>
          <div className={styles.viewAllBTN}>Read More</div>
</section>
<section>
          <div className={styles.guidesImageContainer}>
            <Image src={'/rotatedRolex.JPG'} className={styles.guidesImage} width={3320} height={2240} />
            <div className={styles.guidesTitle}>Guides</div>
            <div className={styles.guidesContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisquevitae congue mauris rhoncus aenean vel elit scelerisque</div>
            <div className={styles.seeGuidesBTN}>
              <p className={styles.guidesText}>See Guides</p>
            </div>

          </div>
</section>

    </>
  );
}
