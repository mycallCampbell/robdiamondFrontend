import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Menu.module.css";

function Menu() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {!open ? (
        <div>
          <li className={styles.hamburgerIcon} onClick={(e) => handleOpen(e)}>
            <Image src="/hamburger.png" width={25} height={25} />
          </li>
        </div>
      ) : (
        <div onClick={(e) => handleOpen(e)} className={styles.menuContainer}>
          <div>
            <div className={styles.menuTitle}>SELECT MENU</div>
          </div>
          <nav className={styles.navbar}>
            <ul>
              <li>
                <Link href={"/watches"}>
                  <div className={styles.menuItem}>
                    <div>
                      <h3>ROLEX</h3>
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
    </>
  );
}

export default Menu;
