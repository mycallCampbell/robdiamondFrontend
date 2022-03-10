
import React, { useState, useContext, useEffect } from "react";
import Meta from "../components/Meta";

import Link from "next/link";
import Image from 'next/image';
import Footer from "../components/Footer";
import { ProductPageContext } from "../productPageContext";
import styles from '../styles/cart.module.css'


function Cart() {

  const [cart, setCart] = useContext(ProductPageContext);
  const itemAmount = cart.length;

  useEffect(() => {
    localStorage.setItem("cartStorage", JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (id) => {
    const localCart = JSON.parse(localStorage.getItem("cartStorage"));
    const newCart = localCart.filter((item, index) => index !== id);
    setCart(newCart);
  };


  return (
    <div className={styles.container}>
      <Meta 
      title={"Cart"}
      keywords={"Cart Items"}
      description={"The cart page for ROB DIAMOND"}
    />
        <div className={styles.itemsAmount}>
        {itemAmount > 1
          ? `You Have ${itemAmount} items in Your Cart`
          : `You Have ${itemAmount} item in Your Cart`}
        </div>
        <div className={styles.itemsReserved}>
            Items are not reserved until paid for.
        </div>
        <Link href={`/watches`}>
            <div className={styles.breadcrumb}>{'<'} BACK</div>
        </Link>
        <div className={styles.cartContainer}>
            {
                cart.map((product, index) => (
                    <div key={index} className={styles.gridContainer}>
                        <div className={styles.imageContainer}>
                            <Image src={`/${product.image}/${product.image}2.jpeg`} width={300} height={400}/>
                        </div>
                        <div className={styles.contentContainer}>
                            <div className={styles.watchTitle}>{product.name}</div>

                                <div className={styles.ref}><span>REF:</span> {product.ref}</div>
                                <div className={styles.price}> <span>PRICE:</span> £{product.price}</div>
                                <div className={styles.year}><span>YEAR:</span> {product.year}</div>
                                <div className={styles.deliveryInfo}>First Class Recorded Delivery, Tracked and Signed.</div>

                            
                            <div className={styles.remove} onClick={() => handleRemove(index)}>
                                <div></div>
                                <div className={styles.dustbin}>
                                <Image src={`/dustbin.png`} width={18} height={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        {cart.length !== 0 ? (
            <Link href="/deliverydetails">
              <div className={styles.checkoutBtn}>
                <a>CHECKOUT</a>
              </div>
            </Link>

        ) : (
            // Need to display Order Summary
            <>
              <Link href="/">
                <div className={styles.checkoutBtn}>
                  <a>SHOP ROBDIAMOND</a>
                </div>
              </Link>
            </>
          )}
        <Footer src={'/rolexFooter.jpg'} width={1704} height={700} />   
    </div>
  )
}

export default Cart