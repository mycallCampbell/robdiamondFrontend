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
        <div>
          <Image src={"/rolexIpadBG.webp"} width={1246} height={460} />
        </div>

        <div className={styles.grid}>
          <Link href={"/watches"}>
            <div className={styles.card}>
              <h2>ROLEX</h2>
              <p>Find The Perfect Rolex For You</p>
            </div>
          </Link>

          <div className={styles.middleCard}>
            <h4>
              Rob Diamond is one of London&apos;s Leading Rolex dealers located
              in Hatton Garden.
            </h4>
          </div>

          <Link href={"/contact"}>
            <div className={styles.card}>
              <h2>CONTACT</h2>
              <p>Call, WhatsApp or Email RobDiamond</p>
            </div>
          </Link>
        </div>
      </main>

      <section className={styles.section3}>
        <div className={styles.tagline}>
          <h1>Beauty In Motion</h1>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageBeauty}>
            <Image src={"/beautyInMotion.jpeg"} width={450} height={400} />
          </div>
          <div className={styles.imageBeauty}>
            <Image src={"/rolexBoxBG.jpeg"} width={450} height={400} />
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
