import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/categories.module.css';
import Footer from '../components/Footer';

export default function categories() {
  return (
    <main className={styles.containerMain}>
        {/* META */}
        <Head>
          <title>CATEGORIES</title>
          <meta name="Categories" content="Rob Diaomond Categories Page" />
          <meta property="og:image" content="faviconRob.ico" />
          
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

          <link rel="icon" href="/faviconRob.ico" />
        </Head>
    <div className={styles.titleHeader}>CATEGORIES</div>

    {/* DATEJUST */}
    
    <Link href={'/datejust'}> 
        <div>
            <Image
                src={`/watches/datejust126231jubileewimbledon/126231datejust1.JPG`}
                width={840}
                height={560}
                className={styles.imageCat}
            />
        </div>
    </Link>
        <div className={styles.contentContainer}>
            <div className={styles.rolexTitle}>Rolex</div>
            <div className={styles.modelTitle}>DateJust</div>
        </div>
    <Link href={'/datejust'}> 
        <div className={styles.viewDetailsBTN}>
            <h4>VIEW</h4>
        </div>
    </Link>
    
    {/* DAYDATE */}
    
    <Link href={'/daydate'}>
        <div>
            <Image
                src={`/watches/daydate228349RBRpresidentialolive/228349RBRdaydate1.JPG`}
                width={840}
                height={560}
                className={styles.imageCat}
            />
        </div>
    </Link>
    <div className={styles.contentContainer}>
        <div className={styles.rolexTitle}>Rolex</div>
        <div className={styles.modelTitle}>DayDate</div>
    </div>
    <Link href={'/daydate'}> 
        <div className={styles.viewDetailsBTN}>
            <h4>VIEW</h4>
        </div>
    </Link>

    {/* GMT-MASTER II */}

    <Link href={"/GMT-MasterII"}>
        <div>
            <Image
                src={`/watches/GMT-MasterII126711CHNRoysterblack/126711CHNRGMT-MasterII1.JPG`}
                width={840}
                height={560}
                className={styles.imageCat}
            />
        </div>
    </Link>
    <div className={styles.contentContainer}>
        <div className={styles.rolexTitle}>Rolex</div>
        <div className={styles.modelTitle}>GMT-Master II</div>
    </div>
    <Link href={'/GMT-MasterII'}> 
        <div className={styles.viewDetailsBTN}>
            <h4>VIEW</h4>
        </div>
    </Link>

    {/* SUBMARINER */}

    <Link href={'/submariner'}>
        <div>
            <Image
                src={"/watches/submariner116611LVoystergreen/116611LVsubmariner1.JPG"}
                width={840}
                height={560}
                className={styles.imageCat}
            />
        </div>
    </Link>
    <div className={styles.contentContainer}>
        <div className={styles.rolexTitle}>Rolex</div>
        <div className={styles.modelTitle}>Submariner</div>
    </div>
    <Link href={'/submariner'}> 
        <div className={styles.viewDetailsBTN}>
            <h4>VIEW</h4>
        </div>
    </Link>

    {/* SKYDWELLER */}

    <Link href={'/skydweller'}>
        <div>
            <Image
                src={`/watches/skydweller326933oysterchampagne/326933skydweller1.JPG`}
                width={840}
                height={560}
                className={styles.imageCat}
            />
        </div>
    </Link>
    <div className={styles.contentContainer}>
        <div className={styles.rolexTitle}>Rolex</div>
        <div className={styles.modelTitle}>SkyDweller</div>
    </div>
    <Link href={'/skydweller'}> 
        <div className={styles.viewDetailsBTN}>
            <h4>VIEW</h4>
        </div>
    </Link>

    {/* DAYTONA */}

    <Link href={'/daytona'}>
        <div>
            <Image
                src={`/watches/daytona116506oysterplatona/116506daytona1.JPG`}
                width={840}
                height={560}
                className={styles.imageCat}
            />
        </div>
    </Link>
    <div className={styles.contentContainer}>
        <div className={styles.rolexTitle}>Rolex</div>
        <div className={styles.modelTitle}>Daytona</div>
    </div>
    <Link href={'/daytona'}> 
        <div className={styles.viewDetailsBTN}>
            <h4>VIEW</h4>
        </div>
    </Link>

    <div className={styles.footerContainer}>
        <Footer src={'/footer_image_canary_wharf.jpg'} width={3276} height={1760} />
    </div>

    </main>
  )
}
