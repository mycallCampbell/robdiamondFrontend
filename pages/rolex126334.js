import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/blingToBulliion.module.css";
import blingToBullion1 from "../public/blingToBullion1.jpg";
import Footer from "../components/Footer";

function rolex126334() {
  return (
    <>
      <Head>
        <title>ROB DIAMOND</title>
        <meta name="description" content="Rolex 126334" />
        <meta property="og:image" content="favicon.png" />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <Image src={"/blueDial/126334Rolex1.JPG"} width={1024} height={683} />
      <div className={styles.container}>
        <div className={styles.title}>ROLEX 126334</div>
        <div className={styles.subTitle}>All You Need To Know About....</div>
        <div className={styles.heroBtn}>
          <a>CALL FOR ADVICE</a>
        </div>
        <h5 className={styles.minutes}>2 Minute Read Time</h5>
        <div className={styles.paragraph}>
          <span className={styles.inception}>
            Discover the Timeless Elegance
          </span>{" "}
          of the Rolex 126334 Blue Dial: A Meticulously Crafted Luxury Watch
          That Exudes Discover the Timeless Elegance of the Rolex 126334 Blue
          Dial Looking for a watch that exudes luxury and sophistication? Look
          no further than the Rolex 126334. Crafted with precision and care,
          every detail of the Rolex 126334 has been meticulously designed to
          deliver a watch that is both beautiful and durable.
        </div>
        <h5 className={styles.subHeader}>Glass</h5>
        <div className={styles.paragraph}>
          The synthetic sapphire glass is highly scratch-resistant, ensuring
          that your watch stays looking like new for years to come. In the
          unlikely event that the glass is damaged, it can be replaced.
        </div>
        <Image src={"/blueDial/126334Rolex4.JPG"} width={1024} height={683} />
        <h5 className={styles.subHeader}>Cyclops</h5>
        <div className={styles.paragraph}>
          The cyclops lens magnifies the date by 2.5 times, making it easy to
          read at a glance. This lens can also be replaced if necessary.
        </div>

        <h5 className={styles.intro}>Serial Number</h5>
        <div className={styles.paragraph}>
          The unique reference number is placed in between the glass and the
          dial, and it can be helpful in the event of loss or theft.
        </div>
        <div className={styles.heroBtn}>
          <Link
            href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
          >
            WHATSAPP ROB DIRECT
          </Link>
        </div>
        <div className={styles.paragraph}>
          The box and card that come with the Rolex 126334 are important for
          maintaining the watch's value and authenticity. The white swing tag
          serves as proof that the watch has not been worn and is brand new.
          Celebrities such as Roger Federer, David Beckham, and Jay-Z have been
          spotted wearing Rolex watches, and the Rolex 126334 is a great
          entry-level watch for anyone looking to own a piece of luxury watch
          history. In conclusion, the Rolex 126334 is a stunning and timeless
          watch that is built to last. From the scratch-resistant sapphire glass
          to the highly polished jubilee bracelet, every detail is crafted with
          precision and care. With RobDiamond's extra link fitting service and
          the peace of mind of the Rolex warranty, this watch is a great
          investment for anyone looking to own a piece of luxury watch history.
        </div>

        <div className={styles.intro}>
          <span className={styles.boldText}>
            Take your TIME and invest wisley!
          </span>
        </div>
      </div>
      <Footer src={"/footer_rose.JPG"} width={3360} height={2240} />
    </>
  );
}

export default rolex126334;
