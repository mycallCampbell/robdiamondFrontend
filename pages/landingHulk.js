import React from 'react'
import Image from 'next/image'
import hulk from '../public/hulk.jpg'
import styles from '../styles/landingHulk.module.css'
import theHulk from '../public/the-hulk.jpg'
import Footer from '../components/Footer'


function landingHulk() {
  return (
    <>
    <Image src={hulk} width={1200} height={1200} />
    <div className={styles.container}>
        <div className={styles.title}>The Rolex Submariner 116610LV</div>
        <div className={styles.subTitle}>AKA &quot;THE HULK&quot;</div>
        <div className={styles.heroBtn}>
             <a>CALL FOR ADVICE</a>
        </div>
        <div className={styles.intro}>Discontinued in 2017, the <span>'Money Green'</span> Rolex Submariner Hulk is one of the most sought after wrist watches of our time. Whenever Rolex discontinue a model from their custom collection we immediately see the creation of an investment piece. Both in terms of finance and allure!</div>
    <Image src={theHulk} width={1200} height={1200} />
    <div className={styles.title}>Inside the mind of Rolex</div>
    
    </div>
    <Footer src={'/rolexFooter.jpg'} width={1704} height={700} />
    
    </>
  )
}

export default landingHulk