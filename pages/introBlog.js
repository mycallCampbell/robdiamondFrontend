import React from 'react'
import Image from 'next/image';
import styles from '../styles/introBlog.module.css';


export default function() {
  return (
    <>
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
    </>
  )
}
