import React from "react";
import styles from "./Navgrid.module.css";
import Link from "next/link";

function Navgrid() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href={"/watches"}>
            <div className={styles.menuItem}>
              <div>
                <h5>Categories</h5>
              </div>
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
          <Link href={"/blogs"}>
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
