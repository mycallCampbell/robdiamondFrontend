import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'
import heroImage from '../public/rolexHero.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ROB DIAMOND</title>
        <meta name="description" content="Rolex Specialists" />
        <meta property='og:image' content="favicon.png" />
        <meta name="facebook-domain-verification" content="anh6svr8eyppmiyhj82z4tp7nqbxqa" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        
        {/* HERO */}
        <div className={styles.hero}>
          
            <Image 
            className={styles.heroImage} 
            src={heroImage} 
            objectFit="cover"
            objectPosition="center"
            layout="intrinsic" 
            />
            {/* <div className={styles.heroContent}>BEAUTY IN MOTION</div>s */}
    
        </div>

        <div className={styles.grid}>
          <Link href={'/watches'}>
            <div className={styles.card}>
              <h2>ROLEX</h2>
              <p>Find The Perfect Rolex For You</p>
            </div> 
          </Link>

          <Link href={'/contact'}>
            <div className={styles.card}>
              <h2>CONTACT</h2>
              <p>Call, Message or Email Today</p>
            </div> 
          </Link>
        </div>
      </main>

      <Footer src={'/rolexFooter.jpg'} width={1704} height={700} />
    </div>
  )
}
