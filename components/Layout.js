import React, {useState} from 'react';

import styles from './Layout.module.css';
import MenuOpen from './MenuOpen';
import Image from 'next/image';
import Link from 'next/link'
import MenuClosed from './MenuClosed';

function Layout({children}) {

    const [toggle, setToggle] = useState(true)
  
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
        {toggle ? 
        <>
        <div className={styles.containerHeader1}>
            <div className={styles.burgerIcon}>
              <MenuClosed handleToggle={handleToggle}/>
            </div>
            <Link href={'/'}>
                <div className={styles.logo}>
                    <h2><span>ROB</span> DIAMOND</h2>
                </div>
            </Link>
            <div className={styles.bagIcon}>
                <Image src={'/logo.png'} width={50} height={50}/>
            </div>
        </div>
        <div className={styles.tablet}>
            <MenuOpen />
        </div>
        </>
        : <>
             <div className={styles.logoOpen}>
                <h2><span>ROB</span> DIAMOND</h2>
            </div>
            <div className={styles.containerHeader2}>
            <MenuOpen handleToggle={handleToggle}/>
            </div>
            <div className={styles.bagIcon}>
                <Image src={'/logo.png'} width={50} height={50}/>
            </div>
            <div className={styles.closeMenu} onClick={handleToggle}>
                <h4>Close Menu</h4>
            </div>
          </>
        }
            <div>{children}</div> 
        </>
    )
}

export default Layout
