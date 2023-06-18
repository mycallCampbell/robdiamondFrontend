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
          <meta name="description" content="Rolex Test HomePage" />
          <meta property="og:image" content="faviconRob.ico" />
          <meta
            name="facebook-domain-verification"
            content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
          />
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

          <link rel="icon" href="/faviconRob.ico" />
        </Head>
      </div>

      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          UPDATED: 13TH JUNE 2023 - 03:10
        </div>
      </div>

      {/* HERO SECTION MOBILE */}
      <div className={styles.heroMobile}>
        <Image src={"/hero_daytona.JPG"} width={3360} height={2240} />
      </div>

      {/* HERO SECTION DESKTOP */}
      <div className={styles.heroDesktop}>
        <Image src={"/hero_daytona_desktop.png"} width={3246} height={1014} />
      </div>

      {/* CTA CONTACT MOBILE*/}
      <div className={styles.contactBTN}>
        <a href="tel:07976753254">Contact</a>
      </div>

      {/* CTA CONTACT DESKTOP*/}
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

      <section className={styles.mainContainer}>
        {/* TTILE LAYOUT MOBILE */}
        <div className={styles.categoryTitleMobile}>CATEGORIES</div>

        {/* TITLE LAYOUT DESKTOP */}

        <div className={styles.containerTitleDesktop}>
          <div className={styles.categoryTitleDesktop}>CATEGORIES</div>
          <div className={styles.viewAllBTNDesktop}>View All</div>
        </div>

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

          <Link href={"/submariner"}>
            <>
              <div className={styles.categoryGrid}>
                <div className={styles.categoryImageContainer}>
                  <Image
                    src={
                      "/watches/submariner116611LVoystergreen/116611LVsubmariner1.JPG"
                    }
                    width={840}
                    height={560}
                    className={styles.categoryImage}
                  />
                </div>
                <div className={styles.contentBG}>
                  <div className={styles.contentRolexContainer}>
                    <p className={styles.rolex}>Rolex</p>
                    <p className={styles.category}>Submariner</p>
                  </div>
                </div>
              </div>
            </>
          </Link>

          <Link href={"/skydweller"}>
            <>
              <div className={styles.categoryGrid}>
                <div className={styles.categoryImageContainer}>
                  <Image
                    src={`/watches/skydweller326933oysterchampagne/326933skydweller1.JPG`}
                    width={840}
                    height={560}
                    className={styles.categoryImage}
                  />
                </div>
                <div className={styles.contentBG}>
                  <div className={styles.contentRolexContainer}>
                    <p className={styles.rolex}>Rolex</p>
                    <p className={styles.category}>SkyDweller</p>
                  </div>
                </div>
              </div>
            </>
          </Link>

          <Link href={"/daytona"}>
            <>
              <div className={styles.categoryGrid}>
                <div className={styles.categoryImageContainer}>
                  <Image
                    src={`/watches/daytona116506oysterplatona/116506daytona1.JPG`}
                    width={840}
                    height={560}
                    className={styles.categoryImage}
                  />
                </div>
                <div className={styles.contentBG}>
                  <div className={styles.contentRolexContainer}>
                    <p className={styles.rolex}>Rolex</p>
                    <p className={styles.category}>Daytona</p>
                  </div>
                </div>
              </div>
            </>
          </Link>
        </div>

        {/* CTA VIEW ALL */}
        <div className={styles.viewAllBTN}>View All</div>

        {/* HIGHLIGHT SECTION */}
        <div className={styles.highlightTitleMobile}>HIGHLIGHTS</div>

        {/* HGIHLIGHT MOBILE */}
        <div className={styles.highlightContainerMobile}>
          <div className={styles.highlightImageContainer}>
            <Image
              src={"/sky_dweller_highlights.JPG"}
              className={styles.highlightImage}
              width={3320}
              height={2240}
            />
          </div>
          <div className={styles.highlightContentRolex}>Rolex</div>
          <div className={styles.highlightContentModel}>Sky Dweller</div>
          <div className={styles.highlightContent}>
            Introducing the Rolex Skydweller: where elegance meets precision.
            With its iconic design, dual time zones, and ....
          </div>
          <div className={styles.readMoreBTN}>Read More</div>
        </div>

        {/* HIGHLIGHT DESKTOP */}
        <div className={styles.highlightTitleDesktop}>HIGHLIGHTS</div>

        <div className={styles.highlightContainerDesktop}>
          <div className={styles.highlightImageContainer}>
            <Image
              src={"/sky_dweller_highlights.JPG"}
              className={styles.highlightImage}
              width={3320}
              height={2240}
            />
            <div className={styles.highlightContentRolexDesktop}>Rolex</div>
            <div className={styles.highlightContentModelDesktop}>
              Sky Dweller
            </div>
            <div className={styles.highlightContentDesktop}>
              Introducing the Rolex Skydweller: where elegance meets precision.
              With its iconic design, dual time zones, and ....
            </div>
            <div className={styles.readMoreBTN}>Read More</div>
          </div>

          <div className={styles.highlightImageContainer}>
            <Image
              src={"/daytona_highlights.JPG"}
              className={styles.highlightImage}
              width={3320}
              height={2240}
            />
            <div className={styles.highlightContentRolexDesktop}>Rolex</div>
            <div className={styles.highlightContentModelDesktop}>Daytona</div>
            <div className={styles.highlightContentDesktop}>
              Introducing the Rolex Daytona: where elegance meets precision.
              With its iconic design, dual time zones, and ....
            </div>
            <div className={styles.readMoreBTN}>Read More</div>
          </div>
        </div>
      </section>

      {/* GUIDES SECTION */}
      <section>
        {/* GUIDES MOBILE */}
        <div className={styles.guidesImageContainerMobile}>
          <Image
            src={"/rotatedRolex.JPG"}
            className={styles.guidesImage}
            width={3320}
            height={2240}
          />
          <div className={styles.guidesTitle}>Guides</div>
          <div className={styles.guidesContent1}>All You Need to Know....</div>
          <div className={styles.guidesContent2}>
            With extensive knowledge and passion for luxury Rolex timepieces....
            Checkout our Latest Guides{" "}
          </div>
          <div className={styles.seeGuidesBTN}>See Guides</div>
        </div>

        {/* GUIDES DESKTOP */}
        <div className={styles.guidesImageContainerDesktop}>
          <Image
            src={"/rotated_rolex_desktop.JPG"}
            className={styles.guidesImage}
            width={3357}
            height={1392}
          />
          <div className={styles.guidesTitleDesktop}>Guides</div>
          <div className={styles.guidesContent1}>All You Need to Know....</div>
          <div className={styles.guidesContent2}>
            With extensive knowledge and passion for luxury Rolex timepieces....
            Checkout our Latest Guides{" "}
          </div>
          <div className={styles.seeGuidesBTNDesktop}>See Guides</div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section>
        <div className={styles.blogsTitle}>BLOGS</div>

        {/* BLOGS MOBILE */}
        <div className={styles.blogContainer}>
          <Image
            src={"/blog_image_wimbledon.JPG"}
            className={styles.blogImage}
            width={2000}
            height={1333.5}
          />
        </div>

        {/* BLOGS DESKTOP */}
        <div className={styles.blogContainerDesktop}>
          <div className={styles.blogImageContainer}>
            <Image
              src={"/blog_image_wimbledon.JPG"}
              className={styles.blogImage}
              width={2000}
              height={1333.5}
            />
          </div>
          <div className={styles.blogBGContainer}>
            <Image
              src={"/blog_bg_desktop.png"}
              className={styles.blogBG}
              width={2000}
              height={1333.5}
            />
            <div className={styles.blogsContentContainerDesktop}>
              <div className={styles.blogsContentTitleDesktop}>
                The Story of the Wimbledon
              </div>

              <div className={styles.blogsContentSubTitleDesktop}>
                Why, How and What's Next....
              </div>
              <div className={styles.readMoreBTNBlogsDesktop}>Read More</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW SECTION */}
      {/* <section>
        <div className={styles.reviewImageContainer}>
          <Image
            src={"/rolexBlueClose.JPEG"}
            className={styles.reviewImage}
            width={816}
            height={693}
          />
          <div className={styles.reviewsTitle}>REVIEWS</div>
        </div>
      </section> */}

      {/* SUBSCRIPTION SECTION */}
      <section>
        <div className={styles.gridContainerSubscription}>
          <div className={styles.subscriptionContent}>
            <div className={styles.subscriptionTitle}>SUBSCRIPTION</div>
            Enter Your Email address to recieve our latest updates on Guides and
            Blogs
          </div>
          <div className={styles.subscriptionContainer}>
            <div className={styles.subscriptionEmailContent}>
              Enter Your Email Address
            </div>
            <div className={styles.subscriptionArrow}>
              <Image
                src={"/right-arrow-white.PNG"}
                className={styles.whiteArrow}
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
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
