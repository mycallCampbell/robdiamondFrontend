import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";

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
  return (
    <div className={styles.container}>
      {/*  META DATA */}
      <Head>
        <title>ROB DIAMOND</title>
        <meta name="description" content="Rolex Specialists" />
        <meta property="og:image" content="faviconRob.ico" />
        <meta
          name="facebook-domain-verification"
          content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
        />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

        <link rel="icon" href="/faviconRob.ico" />
      </Head>

      <main className={styles.main}>
        {/* HERO SECTION*/}
        <div className={styles.heroImage}>
          <Image src={"/hero_daytona.JPG"} width={3360} height={2240} />
        </div>
        <div className={styles.heroImageDesktop}>
          <Image src={"/hero_daytona_desktop.PNG"} width={3354} height={1479} />
        </div>

        <div className={styles.caption}>
          <p className={styles.readyFor}>Ready for Your Perfect</p>
          <h2>ROLEX</h2>
        </div>

        {/* CTA */}
        <div className={styles.heroBtn}>
          <Link
            href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
          >
            WHATSAPP
          </Link>
        </div>

        {/* CATEGORIES SECTION */}

        <p className={styles.collectionTitle}>CATEGORIES</p>

        <div className={styles.collectionGrid}>
          <Link href={"/datejust"}>
            <div className={styles.grid}>
              <Image
                src={`/watches/datejust126231jubileewimbledon/126231datejust1.JPG`}
                width={840}
                height={560}
              />
              <div className={styles.gridContent}>
                <p className={styles.gridTitleRolex}>ROLEX</p>
                <p>DATEJUST</p>
              </div>
            </div>
          </Link>

          <Link href={"/GMT-MasterII"}>
            <div className={styles.grid}>
              <Image
                src={`/watches/GMT-MasterII126711CHNRoysterblack/126711CHNRGMT-MasterII1.JPG`}
                width={840}
                height={560}
              />
              <div className={styles.gridContent}>
                <p className={styles.gridTitleRolex}>ROLEX</p>
                <p>GMT-MASTER II</p>
              </div>
            </div>
          </Link>

          <Link href={"/daytona"}>
            <div className={styles.grid}>
              <Image
                src={`/watches/daytona116506oysterplatona/116506daytona1.JPG`}
                width={840}
                height={560}
              />
              <div className={styles.gridContent}>
                <p className={styles.gridTitleRolex}>ROLEX</p>
                <p>DAYTONA</p>
              </div>
            </div>
          </Link>

          <Link href={"/submariner"}>
            <div className={styles.grid}>
              <Image
                src={
                  "/watches/submariner116611LVoystergreen/116611LVsubmariner1.JPG"
                }
                width={840}
                height={560}
              />
              <div className={styles.gridContent}>
                <p className={styles.gridTitleRolex}>ROLEX</p>
                <p>SUBMARINER</p>
              </div>
            </div>
          </Link>

          <Link href={"/skydweller"}>
            <div className={styles.grid}>
              <Image
                src={`/watches/skydweller326933oysterchampagne/326933skydweller1.JPG`}
                width={840}
                height={560}
              />
              <div className={styles.gridContent}>
                <p className={styles.gridTitleRolex}>ROLEX</p>
                <p>SKYDWELLER</p>
              </div>
            </div>
          </Link>

          <Link href={"/daydate"}>
            <div className={styles.grid}>
              <Image
                src={`/watches/daydate228349RBRpresidentialolive/228349RBRdaydate1.JPG`}
                width={840}
                height={560}
              />
              <div className={styles.gridContent}>
                <p className={styles.gridTitleRolex}>ROLEX</p>
                <p>DAYDATE</p>
              </div>
            </div>
          </Link>
        </div>

        {/* <div className={styles.space}></div> */}

        {/* BLOG SECTION */}
        <div className={styles.blogContainer}>
          <div className={styles.blog}>
            <p className={styles.theLatest}>THE LATEST BLOGS</p>
            <Image
              className={styles.blogImage}
              src={"/blogImage_desktop.JPG"}
              width={3357}
              height={1473}
            />
            <div className={styles.blogCaption}>
              <p>Should You Invest In a Rolex Watch or Buy Gold</p>
            </div>
            <div className={styles.readMoreBTN}>
              <Link href={"/blogs"}>READ MORE</Link>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p className={styles.theLatestDesktop}>THE LATEST BLOGS</p>

            <p>
              Looking for the latest and most informative blogs on Rolex? Look
              no further! We are thrilled to announce the release of our newest
              blogs, packed with fresh and exciting content about the
              world-renowned luxury watch brand. Our team of expert writers have
              worked tirelessly to deliver the latest news, trends, and insights
              on all things Rolex. Whether you're a seasoned collector or a
              casual admirer, our newest blogs are sure to captivate and engage.
            </p>
          </div>
        </div>
      </main>

      <Footer src={"/footer_rose.JPG"} width={3360} height={2240} />
    </div>
  );
}
