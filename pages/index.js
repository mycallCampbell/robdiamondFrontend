import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
// import Search from "../components/Search";

// export const getStaticProps = async () => {
//   const data = await fetch("https://www.robdiamond-be.co.uk/api/blogs");
//   const blogs = await data.json();

//   return {
//     props: {
//       blogs: blogs,
//     },
//     revalidate: 60,
//   };
// };

export default function Home() {

  // useEffect(() => {
  // const cookie = document.cookie
  // })

  return (
    <>
      <div>
        {/* META */}
        <Head>
          <title>ROB DIAMOND</title>
          <meta name="description" content="Rolex Home Page" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Rob Diamond" />
          <meta property="og:description" content="The Time Keeper and Trusted Dealer" />
          <meta property="og:url" content="https://www.robdiamond.co.uk/" />
          <meta property="og:site_name" content="ROB DIAMOND" />
          <meta property="og:image" content="https://www.robdiamond.co.uk/robdiamond_logo300.jpg" />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
          {/* <meta property="og:image:type" content="image/jpg" /> */}
          {/* <meta
            name="facebook-domain-verification"
            content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
          /> */}
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

          <link rel="icon" href="/faviconRob.ico" />
        </Head>
      </div>

      {/* <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          UPDATED: 25th JULY 2023 - 01:13
        </div>
      </div> */}
      
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
          <Link href={'/watches'}>
            <div className={styles.viewAllBTNDesktop}>View All</div>
          </Link>
        </div>

        <div className={styles.gridContainerCategories}>
          <Link href={"/datejust"}>
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
          </Link>

          <Link href={"/skydweller"}>
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
          </Link>

          <Link href={"/daytona"}>
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
          </Link>
        </div>

        {/* CTA VIEW ALL */}
        <Link href={'/watches'}>
          <div className={styles.viewAllBTN}>View All</div>
        </Link>

        {/* HIGHLIGHT SECTION */}
        <div className={styles.highlightTitleMobile}>HIGHLIGHTS</div>

        {/* HGIHLIGHT MOBILE */}
        <div className={styles.highlightContainerMobile}>
          <div className={styles.highlightImageContainer}>
            <Image
              src={"/sky_dweller_highlights.JPG"}
              className={styles.highlightImage}
              width={1660}
              height={1120}
            />
          </div>
          <div className={styles.highlightContentRolex}>Rolex</div>
          <div className={styles.highlightContentModel}>Sky Dweller</div>
          <div className={styles.highlightContent}>
            Introducing the Rolex Skydweller: where elegance meets precision.
            With its iconic design, dual time zones, and ....
          </div>
          <Link href={'/landingSkyDweller'}>
            <div className={styles.readMoreBTN}>Read More</div>
          </Link>
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
            <Link href={'/landingSkyDweller'}>
            <div className={styles.readMoreBTN}>Read More</div>
            </Link>
          </div>

          {/* <div className={styles.highlightImageContainer}>
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
          </div> */}
        </div>
      </section>

      {/* GUIDES SECTION */}
      <section>
        {/* GUIDES MOBILE */}
        <div className={styles.guidesImageContainerMobile}>
          <Image
            src={"/filler/dayDate_guides_bg.JPG"}
            className={styles.guidesImage}
            width={3320}
            height={2240}
          />
          
        <div className={styles.guidesContent1}>All You Need to Know....</div>
        <div className={styles.guidesContent2}>Checkout our Latest Guides</div>
        <Link href={'/chronoMasterpiece'}>
          <div className={styles.seeGuidesBTN}>View All</div>
        </Link>
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
            Checkout our Latest Guides
          </div>
          <Link href={'/chronoMasterpiece'}>
            <div className={styles.seeGuidesBTNDesktop}>View All</div>
          </Link>
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
        <Link href={'/introBlog'}>
          <div className={styles.readMoreBTNBlog}>Read More</div>
        </Link>


        {/* BLOGS DESKTOP */}

          <div className={styles.blogGridDesktop}>
            <div className={styles.blogImageContainerDesktop}>
              <Image
                src={"/blog_image_wimbledon.JPG"}
                className={styles.blogImageDesktop}
                width={2000}
                height={1333.5}
              />
            </div>
            <div className={styles.blogContentContainerDesktop}>
              <div className={styles.blogContentDesktop}>
                <div className={styles.blogContentTitleDesktop}>The Time Keeper....</div>
                <div className={styles.blogContentSubTitleDesktop}>Renowned Trusted Deeler</div>
                <Link href={'/introBlog'}>
                <div className={styles.readMoreBTNBlogDesktop}>Read More</div>
                </Link>
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
      {/* <section>
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
                src={"/right-arrow-white.png"}
                className={styles.whiteArrow}
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* FOOTER SECTION */}
      {/* <section className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContentContainerColumn}>
            <Link href={"contact"}>
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
      </section> */}
    <Footer src={'/footer_image_canary_wharf.jpg'} width={3276} height={1760} />
    
    </>
  );
}
