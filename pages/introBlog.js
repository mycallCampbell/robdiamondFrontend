import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/introBlog.module.css';



export default function introBlog() {
  return (
    <>

    {/*  META DATA */}
    <Head>
        <title>ROB DIAMOND</title>
        <meta name="Intro for Rolex Blog" content="The Time Keeper" />
        <meta property="og:image" content="faviconRob.ico" />
        
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

        <link rel="icon" href="/faviconRob.ico" />
    </Head>

    {/* HERO SECTION */}
    <div>
      <Image src={'/intro_hero_cropped.jpg'} width={2048} height={1090} />
    </div>
    <div className={styles.tagTitle}>
      <h1>The Time Keeper</h1>
      <h4>And Renowned Trusted Dealer</h4>
    </div>

    <div className={styles.intro}>
    Rob Diamond, based in the heart of Canary Wharf is a long time Jewellery and Watch expert. First dipping his toes in the water and becoming a Gemologist in his early 20’s, travelling across all parts of the globe to attain such knowledge and eminent qualification.
    </div>

    <div className={styles.intro}>
    Rob, now in his early 50’s has acquired a wealth of knowledge in the Gemology field and over time naturally gravitated into the world of watches. Having a penchant for Rolex, he is renowned for consulting and working with a high-end market and has a catalogue and connection for almost any Rolex model. 
    </div>

    <div className={styles.intro}>
    When speaking with Rob, he informs me that trust is a key element in the transaction of any successful objective. There are several factors that are required for facilitating the sale of a high-end luxury watch or item of Jewellery. He reminds us that an acute attention to detail is a must and affirms that the small margins in his work flow aid to elevating his business to the top 1% of the market vendors in this field. 
    </div>

    <div className={styles.quote}>
    “I’m not here for the short term or to make a quick buck, I’m here for the long run and to ensure a legacy of trust and quality that is associated with my name”.
    </div>

    <div className={styles.introBlogWatch}>
      <Image src={'/intro_blog_watch.JPG'} width={1680} height={1120} />
    </div>

    
    <div className={styles.intro}>
    This is certainly true from the outside looking in. If one was to visit Rob Diamond’s office you can immediately feel a sense of prestige and credibility given its specific location and attention to the finer details.
    </div>

    <div className={styles.intro}>
    It is worthy to note that Rob Diamond’s collection ranges from Rolex watches that are ‘hot off the press’ models to renowned vintage models. He brings to light some of the many reasons behind the designs of the Rolex models and their allining intrigue. As a teaser, Rob informs me of why the Submariner model comprises a unidirectional bezel (only rotates one way) and the specific direction of said rotation.
    </div>

    <div className={styles.quote}>
    “Rolex are the masters of mechanical engineering and have accomplished the means by demonstrating this through artistic design”
    </div>

    <div className={styles.vintageCropped}>
      <Image src={'/rolex_vintage_cropped.JPG'} width={1904} height={2118} />
    </div>

    <div className={styles.intro}>
    The Submariner model’s bezel only rotates anti-clockwise and this is a safety feature for using the bezel to set a time limit during a diving session. Rob goes on to say that there are a myriad of features and specific design configurations that all serve a unique purpose. He notes that the SkyDweller model is the most complex of them all and would be a fitting time piece for ‘James Bond’.
    </div>

    <div className={styles.skydwellerFlowers}>
      <Image src={'/skydweller_flowers.jpg'} width={1024} height={682.5} />
    </div>

    <div className={styles.intro}>
    Rolex has gained a huge wave of interest in recent times with the majority of celebrities adorning the iconic and recognisable models in public. Additionally, Rolex have been long time sponsors of the Formula 1 and the infamous Wimbledon Tennis tournament. Rob describes the Rolex brand as a dominant force in the horological market. 
    </div>

    <div className={styles.intro}>
    “Rolex are here to stay and there is good reason as to the why investors across the globe have stocked up on their collection” 
    </div>

    <div className={styles.intro}>
    Certainly, the financial data from the previous couple of years shows how dominant Rolex are in terms of an investment acquisition. In conclusion, one could safely assume that the Rolex brand has supplied the best of both worlds for their clients insofar as ensuring an investable timepiece that can be adorned all the while retaining its value.
    </div>

    <div className={styles.intro}>
    Rob Diamond is available by appointment only. 
    </div>

    <div className={styles.contactBTN}>
      <Link
        href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
      >
        WHATSAPP
      </Link>
    </div>

    <div>
      <Image src={'/footer_image_canary_wharf.jpg'} width={1638} height={880} />
    </div>

    <div className={styles.locationTitle}>LOCATION </div>
    <div className={styles.locationAddress}>25 Cabot Square, Canary Wharf, London E144Q</div>
    <div className={styles.locationUnited}>United Kingdom</div>

    <div className={styles.space}></div>
    </>
  )
}