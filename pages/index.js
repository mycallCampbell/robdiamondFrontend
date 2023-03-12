import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import heroImage from "../public/rolexHero.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
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
        {/* HERO for desktop and ipad*/}
        <div className={styles.heroImage}>
          <Image src={"/hero_image_rolex1.jpeg"} width={1387} height={1893} />
        </div>

        <div className={styles.caption}>
          <h4>Ready for Your Perfect</h4>
          <h2>ROLEX</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.heroBtn}>
            <Link
              href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
            >
              WHATSAPP ROB DIRECT
            </Link>
          </div>

          <div className={styles.collectionTitle}>LATEST BLOG</div>

          <div className={styles.collectionGrid}>
            <Link href={"/blingToBullion"}>
              <div className={styles.grid1}>
                <Image src={"/latest_blog.PNG"} width={200} height={240} />
              </div>
            </Link>

            <div className={styles.grid2}></div>
          </div>
        </div>
      </main>

      <section className={styles.section3}>
        <div className={styles.tagline}>
          <h1>Beauty In Motion</h1>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageBeauty}>
            <Image src={"/beautyInMotion.jpeg"} width={450} height={450} />
          </div>
          <div className={styles.imageBeautyWimbledon}>
            <Image src={"/rolexBoxBG.jpeg"} width={450} height={450} />
          </div>
        </div>
        <div className={styles.bannerBottom}>
          <div className={styles.viewDetailsBTN}>
            <Link
              href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
            >
              <h4>WHATSAPP</h4>
            </Link>
          </div>
        </div>
      </section>

      <Footer src={"/rolexFooter.jpg"} width={1704} height={700} />
    </div>
  );
}
