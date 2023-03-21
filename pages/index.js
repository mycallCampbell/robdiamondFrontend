import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import heroImage from "../public/rolexHero.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      {/*  META DATA */}
      <Head>
        <title>ROB DIAMOND</title>
        <meta name="description" content="Rolex Specialists" />
        <meta property="og:image" content="favicon.png" />
        <meta
          name="facebook-domain-verification"
          content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        {/* HERO SECTION*/}
        <div className={styles.heroImage}>
          <Image src={"/hero_blingToBullion.jpeg"} width={1024} height={683} />
        </div>

        <div className={styles.caption}>
          <p className={styles.readyFor}>Ready for Your Perfect</p>
          <h2>ROLEX</h2>
        </div>

        <div className={styles.heroBtn}>
          <Link
            href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
          >
            WHATSAPP ROB DIRECT
          </Link>
        </div>

        {/* COLLECTIONS SECTION */}
        <p className={styles.collectionTitle}>COLLECTION</p>

        <div className={styles.collectionGrid}>
          <Link href={"/#"}>
            <div className={styles.grid}>
              <Image
                src={"/126231wimbledon/126231wimbledon1.JPG"}
                width={840}
                height={560}
              />
              <div className={styles.gridContent}>
                <p className={styles.gridTitleRolex}>ROLEX</p>
                <p>DATEJUST</p>
              </div>
            </div>
          </Link>

          <Link href={"/#"}>
            <div className={styles.grid}>
              <Image
                src={"/126711CHNRrootbeer/126711CHNRrootbeer1.JPG"}
                width={840}
                height={560}
              />
              <div className={styles.gridContent}>
                <p className={styles.gridTitleRolex}>ROLEX</p>
                <p>GMT MASTER II</p>
              </div>
            </div>
          </Link>

          <Link href={"/#"}>
            <div className={styles.grid}>
              <Image
                src={"/116506platona/116506platona1.JPG"}
                width={840}
                height={560}
              />
              <div className={styles.gridContent}>
                <p className={styles.gridTitleRolex}>ROLEX</p>
                <p>DAYTONA</p>
              </div>
            </div>
          </Link>

          <Link href={"/#"}>
            <div className={styles.grid}>
              <Image
                src={"/116611LVhulk/116611LVhulk1.JPG"}
                width={840}
                height={560}
              />
              <div className={styles.gridContent}>
                <p className={styles.gridTitleRolex}>ROLEX</p>
                <p>SUBMARINER</p>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.space}></div>

        {/* BLOG SECTION */}
        <div className={styles.blog}>
          <p>THE LATEST BLOGS</p>
          <Image
            className={styles.blogImage}
            src={"/blogImage.JPG"}
            width={3360}
            height={2240}
          />
        </div>
      </main>

      <Footer src={"/footer_rose.JPG"} width={3360} height={2240} />
    </div>
  );
}
