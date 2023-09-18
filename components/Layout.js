import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.containerGrid}>
        <div className={styles.burgerImage} onClick={() => handleToggle()}>
          <Image src={"/hamburger.png"} width={32} height={32} />
        </div>

        {/* TITLE */}
        <Link href={'/#'}>
          <h1 className={styles.titleItem}>ROB DIAMOND</h1>
        </Link>

        {/* MESSAGE ICON */}
        <div className={styles.messageIconContainer}>
          <div>
            <Image src={"/phone_icon.png"} width={32} height={32} />
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      
      <nav className={isOpen ? styles.navOpen : styles.navClosed}>
        <ul className={styles.mobileMenu}>
          <Link href={'/watches'}>
            <li className={styles.listItem} onClick={() => handleToggle()}>WATCHES</li>
          </Link>
          <Link href={'/landingSkyDweller'}>
            <li className={styles.listItem} onClick={() => handleToggle()}>HIGHLIGHTS</li>
          </Link>
          <Link href={'/chronoMasterpiece'}>
            <li className={styles.listItem} onClick={() => handleToggle()}>GUIDES</li>
          </Link>
          <Link href={'/introBlog'}>
            <li className={styles.listItem} onClick={() => handleToggle()}>BLOGS</li>
          </Link>
          <Link href={'/contact'}>
            <li className={styles.listItem} onClick={() => handleToggle()}>CONTACT</li>
          </Link>

          <div className={styles.menuClose} onClick={() => handleToggle()}>Close Menu</div>


          {/* <div className={styles.arrowListItem}>&gt;</div> */}
        </ul>
      </nav>

      {/* DESKTOP VERSION */}

      <div className={styles.containerGridDesktop}>
        <div>
        </div>

        {/* TITLE */}
        <Link href={'/#'}>
          <h1 className={styles.titleItem}>ROB DIAMOND</h1>
        </Link>

        {/* MESSAGE ICON */}
        <div className={styles.messageIconContainer}>
          <div>
            <Image src={"/phone_icon.png"} width={32} height={32} />
            <a href="tel:07976753254"></a>
          </div>
        </div>
      </div>

      <nav className={styles.desktopNavContainer}>
        <ul className={styles.desktopNav}>
         <Link href={'watches'}>
            <li className={styles.listItem}>WATCHES</li>
          </Link>
          <Link href={'/landingSkyDweller'}>
            <li className={styles.listItem}>HIGHLIGHTS</li>
          </Link>
          <Link href={'/chronoMasterpiece'}>
            <li className={styles.listItem}>GUIDES</li>
          </Link>
          <Link href={'/introBlog'}>
            <li className={styles.listItem}>BLOGS</li>
          </Link>
          <Link href={'/contact'}>
            <li className={styles.listItem}>CONTACT</li>
          </Link>
        </ul>

      </nav>

      <div className={styles.container}>{children}</div>
    </>
  );
}

export default Layout;
