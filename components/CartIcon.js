// import { useContext } from "react";
// import { ProductPageContext } from "../productPageContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./CartIcon.module.css";

function CartIcon() {
  // const [cart, setCart] = useContext(ProductPageContext);
  return (
    <div className={styles.cartIconContainer}>
      <>
        <Link href={"/cart"}>
          <div className={styles.cartItem}>
            <Image src="/logo.png" width={33} height={33} />
            {/* <div className={styles.cartNumber}>
              {cart && cart.length > 0 ? cart.length : ""}
            </div> */}
          </div>
        </Link>
      </>
    </div>
  );
}

export default CartIcon;
