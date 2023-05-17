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
                <h5>WATCHES</h5>
              </div>
            </div>
          </Link>
        </li>

        {/* <li>
          <Link href={"/blogs"}>
            <div className={styles.menuItem}>
              <div>
                <h5>BLOGS</h5>
              </div>
            </div>
          </Link>
        </li> */}

        <li>
          <Link href={"/contact"}>
            <div className={styles.menuItem}>
              <div>
                <h5>CONTACT</h5>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navgrid;
