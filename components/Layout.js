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
        <div className={styles.imageItem}>
          <Image src={"/hamburger.png"} width={32} height={32} />
        </div>

        {/* TITLE */}
        <h1 className={styles.titleItem}>ROB DIAMOND</h1>

        {/* MESSAGE ICON */}
        <div className={styles.messageIconContainer}>
          <div>
            <Image src={"/phone_icon.png"} width={32} height={32} />
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className={styles.nav}>
        <ul className={styles.unorderedList}>
          {/* {isOpen ? (
            <div>
              <div className={styles.categoriesListFlex}>
                <li className={styles.listItem}>Categories</li>
                <div className={styles.arrowListItem}>&gt;</div>
              </div>
              <div
                onMouseLeave={handleToggle}
                className={styles.mouseLeaveContainer}
              >
                <Link href={"/"}>
                  <li className={styles.catModels}>DateJust</li>
                </Link>
                <Link href={"/"}>
                  <li className={styles.catModels}>Submariner</li>
                </Link>
                <Link href={"/"}>
                  <li className={styles.catModels}>GMT Master II</li>
                </Link>
                <Link href={"/"}>
                  <li className={styles.catModels}>Sky Dweller</li>
                </Link>
                <Link href={"/"}>
                  <li className={styles.catModels}>Daytona</li>
                </Link>
                <Link href={"/"}>
                  <li className={styles.catModels}>DayDate</li>
                </Link>
              </div>
            </div>
          ) : (
            <Link href={"/"}>
              <div
                className={styles.categoriesListFlex}
                onMouseEnter={handleToggle}
              >
                <li className={styles.listItem}>Categories</li>
                <div className={styles.arrowListItem}>&gt;</div>
              </div>
            </Link>
          )} */}

          <Link href={"/"}>
            <li className={styles.listItem}>About Us</li>
          </Link>
          <Link href={"/"}>
            <li className={styles.listItem}>Guides</li>
          </Link>
          <Link href={"/"}>
            <li className={styles.listItem}>Blogs</li>
          </Link>
          <Link href={"/"}>
            <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </nav>

      <div className={styles.container}>{children}</div>
    </>
  );
}

export default Layout;
