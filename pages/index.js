import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ROB DIAMOND</title>
        <meta name="description" content="Rolex Specialists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        {/* HERO */}
        <div>
          <Image src={'/rolexHero.jpg'} width={1140} height={525} />
        </div>

        <div className={styles.grid}>
          <Link href={'/watches'}>
            <div className={styles.card}>
              <h2>ROLEX</h2>
              <p>Find The Perfect Rolex For YOU</p>
            </div> 
          </Link>

          <Link href={'/blog'}>
            <div className={styles.card}>
              <h2>BLOG</h2>
              <p>Catch Up on all the Latest Updates</p>
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

      <Footer src={'/rolexFooter.jpg'} width={1704} height={667} />
    </div>
  )
}
