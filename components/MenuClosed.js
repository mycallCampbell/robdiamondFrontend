import React from 'react'
import styles from './MenuClosed.module.css';
import Image from 'next/image';

function MenuClosed({handleToggle}) {
  
   


    return (
            <div className={styles.container} onClick={handleToggle}>
               <Image src={'/hamburger.png'} width={25} height={25}/>
            </div>
    )
}

export default MenuClosed
