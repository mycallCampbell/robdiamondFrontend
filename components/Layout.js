import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

import styles from "./Layout.module.css";
import Navgrid from "./Navgrid";

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <main className={!open ? styles.layoutContainer : styles.displayTitle}>
          <section>
            {!open ? (
              <div>
                <Link href={"#menuContainer"}>
                  <li
                    className={styles.hamburgerIcon}
                    onClick={(e) => handleOpen(e)}
                  >
                    <Image src="/hamburger.png" width={25} height={25} />
                  </li>
                </Link>
              </div>
            ) : (
              <div
                onClick={(e) => handleOpen(e)}
                className={styles.menuContainer}
                id="menuContainer"
              >
                <div className={styles.robDiamondTitle}>
                  <Link href="/#">
                    <h3>
                      <span className={styles.robOpen}>ROB </span>
                      <span className={styles.diamondOpen}>DIAMOND</span>
                    </h3>
                  </Link>
                </div>

                <nav className={styles.navbar}>
                  <ul>
                    <li>
                      <Link href={"/watches"}>
                        <div className={styles.menuGrid}>
                          <div className={styles.menuItem1}>
                            <p>ROLEX</p>
                          </div>
                          <div className={styles.menuItem2}>{">"}</div>
                        </div>
                      </Link>
                    </li>

                    {/* <li>
                      <Link href={"/blogs"}>
                        <div className={styles.menuGrid}>
                          <div className={styles.menuItem1}>
                            <p>BLOG</p>
                          </div>
                          <div className={styles.menuItem2}>{">"}</div>
                        </div>
                      </Link>
                    </li> */}

                    <li>
                      <Link href={"/contact"}>
                        <div className={styles.menuGrid}>
                          <div className={styles.menuItem1}>
                            <p>CONTACT</p>
                          </div>
                          <div className={styles.menuItem2}>{">"}</div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className={styles.closeMenu}>
                  <p>CLOSE MENU</p>
                </div>
              </div>
            )}
          </section>

          <section
            className={!open ? styles.logoContainer : styles.displayNone}
          >
            <div>
              <Link href="/">
                <h3 className={styles.title}>
                  <span className={styles.rob}>ROB </span>
                  <span className={styles.diamond}>DIAMOND</span>
                </h3>
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

        {/* NavGrid */}
        <div className={styles.navgrid}>
          <Navgrid />
        </div>

        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
