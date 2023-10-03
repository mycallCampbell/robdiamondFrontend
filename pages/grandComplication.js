import React from 'react'
import Head from 'next/head';
import Link from 'next/head';
import Image from 'next/image';
import styles from '../styles/grandComplication.module.css';
import Footer from '../components/Footer';

export default function grandComplication() {
  return (
    <div className={styles.container}>
        {/* META */}
        <Head>
          <title>ROB DIAMOND</title>
          <meta name="description" content="5207P GRAND COMPLICATION" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Rob Diamond" />
          <meta property="og:description" content="5207P - GRAND COMPLICATION" />
          <meta property="og:url" content="https://www.robdiamond.co.uk/" />
          <meta property="og:site_name" content="ROB DIAMOND" />
          <meta property="og:image" content="https://www.robdiamond.co.uk/grand_complication_hero.jpg" />
          <meta property="og:image:width" content="840" />
          <meta property="og:image:height" content="560" />
          {/* <meta property="og:image:type" content="image/jpg" /> */}
          {/* <meta
            name="facebook-domain-verification"
            content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
          /> */}
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />
          <link rel="icon" href="/faviconRob.ico" />
        </Head>

         {/* HERO SECTION MOBILE */}
            <div className={styles.heroMobile}>
                <Image src={"/grand_complication_hero.jpg"} width={3360} height={2240} />
            </div>

        {/* HERO SECTION DESKTOP */}
            <div className={styles.heroDesktop}>
                <Image src={"/grand_complication_hero_desktop.JPG"} width={1680} height={849} />
            </div>

            <div className={styles.titleMain}>
                <span>5270P</span> - GRAND COMPLICATIONS
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.tagLine}>Exploring the Patek Philippe 5207P Grand Complication</div>
                <div className={styles.contentGrid}>
                    <div className={styles.contentMain}>
                        In the world of haute horlogerie, few names command as much respect and admiration as Patek Philippe. For over a century and a half, Patek Philippe has been synonymous with precision, craftsmanship, and innovation in watchmaking. The Patek Philippe 5207P Grand Complication is a testament to the brand's enduring commitment to excellence. In this blog, we'll take a closer look at this extraordinary timepiece, highlighting its remarkable features and why it continues to be a pinnacle of horological achievement.
                    </div>
                </div>
            </div>

            {/* CTA CONTACT MOBILE*/}
            <div className={styles.contactBTN}>
                <a href="tel:07976753254">Contact</a>
            </div>

            <div className={styles.subTitle}>The Patek Philippe 5207P Grand Complication: A Brief Overview</div>
            <div className={styles.breifOverview}>The Patek Philippe 5207P is part of the Grand Complications collection, a range of watches renowned for pushing the boundaries of what is possible in watchmaking. Introduced in 2008, this timepiece immediately captured the attention of connoisseurs and collectors with its stunning complexity and elegance.</div>
            <ol>
                <li className={styles.listItem}><span>Perpetual Calendar:</span> At the heart of the 5207P is a perpetual calendar, one of the most coveted complications in watchmaking. This means that it automatically adjusts for leap years, ensuring that you'll never need to manually reset the date.</li>
                <li className={styles.listItem}><span>Minute Repeater:</span> The minute repeater is a hallmark of haute horlogerie, allowing the wearer to chime the time on demand. The 5207P's minute repeater mechanism is a marvel of precision engineering, producing clear and melodious tones.</li>
                <li className={styles.listItem}><span>Tourbillon:</span> A tourbillon is a feature that enhances a watch's accuracy by compensating for positional errors caused by gravity. The tourbillon in the 5207P is beautifully visible through the sapphire crystal case back.</li>
                <li className={styles.listItem}><span>Moon Phase Indicator:</span> The watch also includes a moon phase indicator, which adds a touch of celestial beauty to the dial. It accurately depicts the waxing and waning of the moon over a 29.5-day period.</li>
                <li className={styles.listItem}><span>Dial and Design:</span> The dial of the 5207P is a work of art in itself. Crafted with precision and elegance, it features a variety of subdials and complications while maintaining a balanced and harmonious aesthetic.</li>
            </ol>

            <div className={styles.leatherStrapImage}>
                <Image src={"/leather_strap.JPG"} width={3360} height={2240} />
            </div>

            <div className={styles.subTitle}>Craftsmanship and Attention to Detail</div>
            <div className={styles.breifOverview}>Patek Philippe's commitment to quality and craftsmanship is evident in every aspect of the 5207P Grand Complication. The watch is meticulously hand-finished, with each component carefully polished and decorated. The attention to detail extends to the movement, which is a sight to behold, even for those who aren't watch aficionados. Collectability and Rarity
                Due to the complexity of its movement and the painstaking craftsmanship involved, the Patek Philippe 5207P Grand Complication is produced in limited quantities. This exclusivity only adds to its desirability among collectors, making it not just a timekeeping instrument but a valuable work of art.
            </div>

            <div className={styles.winder}>
                <Image src={"/winder.JPG"} width={2640} height={1575} />
            </div>

            <div className={styles.breifOverview}>
            <span>Conclusion:</span> The Patek Philippe 5207P Grand Complication is a masterpiece that represents the pinnacle of watchmaking expertise. It combines technical prowess with timeless design, creating a watch that is not only functional but also a symbol of luxury and heritage. Whether you're a watch enthusiast or simply an admirer of exceptional craftsmanship, the 5207P is a true marvel worth exploring.</div>
            <Footer src={'/footer_image_canary_wharf.jpg'} width={3276} height={1760} />
        </div>
  )
}
