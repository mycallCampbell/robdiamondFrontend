import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
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
      <Image src={'/intro_hero.jpg'} width={2048} height={1365} />
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

    <div>
      <Image src={'/intro_blog_watch.jpg'} width={1680} height={1120} />
    </div>

    
    <div className={styles.intro}>
    This is certainly true from the outside looking in. If one was to visit Rob Diamond’s office you can immediately feel a sense of prestige and credibility given its specific location and attention to the finer details.
    </div>

    </>
  )
}
