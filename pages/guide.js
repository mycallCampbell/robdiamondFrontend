import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/guide.module.css';


export default function guide() {
  return (
    <main>
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
        <Image src={'/guide_hero_cropped1.jpg'} width={1680} height={902} />
        </div>

        <div className={styles.tagTitle}>
            <h1>What to know when buying a Rolex</h1>
            <h4>Chronological Masterpiece</h4>
        </div>

        <div className={styles.intro}>
        The most important factor when deciding to buy a Rolex model is not necessarily the price or whether you are getting a bargain. This may be true if your sole intention is to buy for investment only. Otherwise, there are several key factors to consider….

        </div>

        <div className={styles.intro}>
        There are a myriad of Rolex models, all of which comprise different functional components and more obvious to the naked eye, the design features. However, for now we shall focus on the most important factor when making the purchase.... 
        </div>
        
        <div className={styles.subTitle}>The Fitting of the Rolex</div>

        <div>
        <Image src={'/wrist.JPG'} width={3360} height={2240} />
        </div>

        <div className={styles.intro}>
        Humans all have different size wrists. And to accompany the circumference of our wrist, we have a unique wrist to hand ratio. Meaning, someone with a small wrist may have a large hand. The opposite may be true and quite often anywhere in between. This is an important factor because Rolex models (depending on the year of manufacturing) vary in the diameter of their Dials. 
        As an example, a 30 year old Datejust Midi model can comprise a 31mm dial compared to a more recent Sky Dweller model with a 42mm dial.
        </div>

        <div className={styles.intro}>
        It’s pertinent to note that in the older versions of Rolex models you needed to remove the bracelet links if you wanted to adjust the size to accommodate a smaller wrist. Times have moved on and Rolex first introduced a Glide Lock Clasp feature in 2008 to allow for a fitted timepiece without the requirement of missing links. Therefore, if you are purchasing a newer model Rolex, ensure that there are no missing links. 
        </div>

        <div>
        <Image src={'/bracelet_jubilee.jpeg'} width={1086} height={724} />
        </div>

        <div className={styles.intro}>
        To summarise on the fitting of the bracelet and the size of the dial, it goes without saying that the larger the dial, the heavier the watch. Make sure the watch feels comfortable on the wrist in terms of weight, size of dial and fitting of the wrist bracelet.
        </div>

        <div className={styles.subTitle}>The Fun Stuff</div>

        <div>
        <Image src={'/batman_gold.JPG'} width={3360} height={2240} />
        </div>



        <div className={styles.intro}>
        With the most important factor covered we shall now move on to the fun stuff….
        In most recent times, Rolex have focused their efforts on the Bezel. Rolex now comprise their very own ‘in house’ material called Cerachrom to manufacture the bezel. Cerachrom is unique to the watch market and carries many advantages. 
        On face value you may notice an array of differing colours accompanied with a particular Rolex model’s Bezel. Colour is a great way to catch the eye of a passer by or indeed, exude vibrance. Rolex recognised this attribute as fundamental to their brand and have implemented a multitude of models to follow suit with their attention grabbing marketing plan.

        </div>

        <div className={styles.intro}>
        It is true to say that Rolex has kept pace with the changing times and can be considered innovators in the horological sector.
        </div>

        <div className={styles.intro}>
        Having mentioned the array of colours, choose the colour that best suits your personality or requirements…. Of Course you would, there are so many to choose from.
        </div>

        <div className={styles.intro}>
        In Addition to the colour variety, Rolex have added functional use cases to the bezel. For instance, the Submariner model’s bezel is unidirectional. Meaning that the bezel can only be rotated in 1 direction (anti-clockwise). This is a diver’s watch and the reason for the single anti-clockwise rotation is a safety mechanism built in to protect the diver. I find this to be very intuitive on behalf of Rolex and offers an insight into their attention to detail. Additionally, other Rolex models such as the GMT-Master II  comprise a bi-directinal bezel, rotating in both anti-clockwise and clockwise. Again, there is a good reason for this…. 
        </div>

        <div className={styles.quote}>
        “Everything happens for a reason in the world of Rolex”
        </div>

        <div className={styles.intro}>
        The Rolex dial on particular models also boasts an array of differing colours. In fact, Rolex seems to have the most fun with their dial designs. There is also the bracelet to consider. Rolex takes advantage of several materials to build out and complement each model. And these materials are of high value:
        </div>

        <ul className={styles.listItem}>
            <li>18k Yellow Gold</li>
            <li>18k Rose Gold</li>
            <li>18k White Gold</li>
            <li>Bespoke Oyster Steel</li> 
        </ul>

        <div className={styles.intro}>
        On each or most Rolex models, you can find a design of 2 materials that complete the bracelet. I.e. Rose Gold and Oyster Steel.
        </div>

        
        <div>
        <Image src={'/tri_watches_gold.JPG'} width={3360} height={2240} />
        </div>

        <div className={styles.intro}>
        To summarise, I think it would be fair to give praise to Rolex for their engineering. They are truly the masters of their world. The automatic movement (72 hour power reserve) and all the intricate mechanical details such as the ParaChrom Hairspring, Chronergy Escapement, Paraflex shock absorber that cohesively amalgamate to deliver a concept of time keeping that Rolex make look easy….
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

    </main>
  )
}
