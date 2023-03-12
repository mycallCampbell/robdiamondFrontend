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
        <Link
          href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
        >
          <div className={styles.cartItem}>
            <Image src="/phone_icon.png" width={32} height={32} />
          </div>
        </Link>
      </>
    </div>
  );
}

export default CartIcon;
