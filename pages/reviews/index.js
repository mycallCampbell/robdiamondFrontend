import React from "react";
import styles from "../../styles/reviews.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/Footer";

export const getStaticProps = async () => {
    const data = await fetch("https://www.robdiamond-be.co.uk/api/reviews")
    const products = await data.json();

    return {
        props: {
            products: products
        },
        revalidate: 60,
    };
}

export default function reviews({ products }) {
  return (
    <div>
        <div>
            <Image
            src={"/categoryBanner/datejustCatBanner.JPG"}
            width={2181}
            height={591}
            />
            <h1 className={styles.titleMain}>DATEJUST</h1>
        </div>
    
        {products.map((product) => (
            <div className={styles.reviewContent}>{product.comment}</div>
        ))}
    </div>

  )
}
