import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const [cookie, setCookie] = useState(true)
  const [catToggle, setCatToggle] = useState(false)

  const handleCookie = () => {
    setCookie(false)
  }

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  const handleCatToggle = () => {
    setCatToggle(!catToggle)
  }

  return (
    <>
    { cookie ?
        <div className={styles.cookieContainer}>
          <div className={styles.cookieContent}>We use Cookies on this website to enhance user experience. Please Accept or Decline</div>
          <div className={styles.btnGrid}>
            <div className={styles.btnAccept} onClick={() => handleCookie()}>Accept</div>
            <div className={styles.btnDecline} onClick={() => handleCookie()}>Decline</div>
          </div>
        </div>
        :
        <div></div>
      }

      {/* MOBILE VERSION  */}
      <div className={styles.containerGrid}>
        <div className={styles.burgerImage} onClick={() => handleMenuToggle()}>
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
      
      <nav className={menuToggle ? styles.navOpen : styles.displayNone}>
        <ul className={styles.mobileMenu}>
        <div className={styles.categoriesDropDown} >
        <Link href={'/categories'}>
            <li className={styles.listItemCategory} onClick={() => handleMenuToggle()}>CATEGORIES</li>
        </Link>
            <div className={styles.arrowDown} onClick={() => handleCatToggle()}>
              <Image src={"/toggle.png"} width={24} height={24} />
            </div>
        </div>  
            {catToggle ?
              <div className={styles.displayCategories}>
              <Link href={'/watches'}>
                  <li className={styles.categoryListItem} onClick={() => handleMenuToggle()}>ALL WATCHES</li>
              </Link>
              <Link href={'/datejust'}>
                  <li className={styles.categoryListItem} onClick={() => handleMenuToggle()}>DATEJUST</li>
              </Link>
              <Link href={'/daydate'}>
                  <li className={styles.categoryListItem} onClick={() => handleMenuToggle()}>DAYDATE</li>
              </Link>
              <Link href={'/GMT-MasterII'}>
                  <li className={styles.categoryListItem} onClick={() => handleMenuToggle()}>GMT MASTER II</li>
              </Link>
              <Link href={'/submariner'}>
                  <li className={styles.categoryListItem} onClick={() => handleMenuToggle()}>SUBMARINER</li>
              </Link>
              <Link href={'/skydweller'}>
                  <li className={styles.categoryListItem} onClick={() => handleMenuToggle()}>SKY DWELLER</li>
              </Link>
              <Link href={'/daytona'}>
                  <li className={styles.categoryListItem} onClick={() => handleMenuToggle()}>DAYTONA</li>
              </Link> 
            </div>
            :
            <div></div>
          
          }
          


          <Link href={'/watches'}>
            <li className={styles.listItem} onClick={() => handleMenuToggle()}>WATCHES</li>
          </Link>
          <Link href={'/landingSkyDweller'}>
            <li className={styles.listItem} onClick={() => handleMenuToggle()}>HIGHLIGHTS</li>
          </Link>
          <Link href={'/chronoMasterpiece'}>
            <li className={styles.listItem} onClick={() => handleMenuToggle()}>GUIDES</li>
          </Link>
          <Link href={'/introBlog'}>
            <li className={styles.listItem} onClick={() => handleMenuToggle()}>BLOGS</li>
          </Link>
          <Link href={'/contact'}>
            <li className={styles.listItem} onClick={() => handleMenuToggle()}>CONTACT</li>
          </Link>



          {/* <div className={styles.arrowListItem}>&gt;</div> */}
        </ul>
        <div className={styles.menuClose} onClick={() => handleMenuToggle()}>Close Menu</div>
      </nav>

      {/* {catToggle ? 
      <div>
        <Link href={'/datejust'}>
            <li className={styles.CategoryListItem}>DATEJUST</li>
        </Link>
      </div> 
      :
      <div></div>
      } */}

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
            <a href="tel:07976753254">
              <Image src={"/phone_icon.png"} width={32} height={32} />
            </a>
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
