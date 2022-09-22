import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Menu from "./Menu";

import logoImage from "../public/logo.png";
import styles from "./Layout.module.css";
import Navgrid from "./Navgrid";

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <main className={!open ? styles.layoutContainer : styles.displayTitle}>
        <section>
          {!open ? (
            <div>
              <li
                className={styles.hamburgerIcon}
                onClick={(e) => handleOpen(e)}
              >
                <Image src="/hamburger.png" width={25} height={25} />
              </li>
            </div>
          ) : (
            <div
              onClick={(e) => handleOpen(e)}
              className={styles.menuContainer}
            >
              <div className={styles.robDiamondTitle}>
                <Link href="/">
                  <h3>
                    <span className={styles.rob}>ROB </span>
                    <span className={styles.diamond}>DIAMOND</span>
                  </h3>
                </Link>
              </div>

              <nav className={styles.navbar}>
                <ul>
                  <li>
                    <Link href={"/watches"}>
                      <div className={styles.menuItem}>
                        <div>
                          <h3>WATCHES</h3>
                        </div>
                        <div className={styles.arrow}>{">"}</div>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link href={"/contact"}>
                      <div className={styles.menuItem}>
                        <div>
                          <h3>CONTACT</h3>
                        </div>
                        <div className={styles.arrow}>{">"}</div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className={styles.closeMenu}>
                <p>Close Menu</p>
              </div>
            </div>
          )}
        </section>

        <section className={!open ? styles.logoContainer : styles.displayNone}>
          <div>
            <Link href="/">
              <h2>
                <span className={styles.rob}>ROB </span>
                <span className={styles.diamond}>DIAMOND</span>
              </h2>
            </Link>
          </div>
        </section>

        {/* CartIcon */}
        <section>
          <div className={!open ? styles.cartIcon : styles.displayNone}>
            <CartIcon />
          </div>
        </section>
      </main>

      <div className={styles.underline}></div>
      {/* NavGrid */}
      <div className={styles.navgrid}>
        <Navgrid />
      </div>

      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Layout;
