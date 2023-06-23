import { useState } from "react";
import styles from "./Navgrid.module.css";
import Link from "next/link";

function Navgrid() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOpen = () => {
    setIsOpen(true);
  };

  const handleMouseClosed = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href={"/watches"}>
            <div className={styles.navContainer}>
              {isOpen ? (
                <div
                  onMouseEnter={handleMouseClosed}
                  className={styles.categoryClosed}
                >
                  <div>
                    <h5>Categories</h5>
                  </div>
                </div>
              ) : (
                <div
                  onMouseLeave={handleMouseOpen}
                  className={styles.categoryOpen}
                >
                  <div className={styles.navName}>
                    <h5>Categories</h5>

                    <ul className={styles.listContainer}>
                      <div className={styles.categoryList}>DateJust</div>
                      <div className={styles.categoryList}>Submariner</div>
                      <div className={styles.categoryList}>GMT MAster II</div>
                      <div className={styles.categoryList}>Sky Dweller</div>
                      <div className={styles.categoryList}>Daytona</div>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </Link>
        </li>

        <li>
          <Link href={"/watches"}>
            <div className={styles.menuItem}>
              <div>
                <h5>About Us</h5>
              </div>
            </div>
          </Link>
        </li>

        <li>
          <Link href={"/blogs"}>
            <div className={styles.menuItem}>
              <div>
                <h5>Blogs</h5>
              </div>
            </div>
          </Link>
        </li>

        <li>
          <Link href={"/guides"}>
            <div className={styles.menuItem}>
              <div>
                <h5>Guides</h5>
              </div>
            </div>
          </Link>
        </li>

        <li>
          <Link href={"/contact"}>
            <div className={styles.menuItem}>
              <div>
                <h5>Contact</h5>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navgrid;
