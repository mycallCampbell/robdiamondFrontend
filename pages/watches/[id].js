import React from 'react'
import Image from 'next/image'
import styles from '../../styles/watchID.module.css'
import Link from 'next/link'
import Footer from '../../components/Footer'

export const getStaticPaths = async () => {
    const res = await fetch(
      "https://www.robdiamond-be.co.uk/api/watches"
    );
    const data = await res.json();
  
    const paths = data.map((path) => {
      return {
        params: { id: path._id.toString() },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  };
  
  // Get all static props from Backend
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://www.robdiamond-be.co.uk/api/watch/" + id);
  
    const data = await res.json();
  
    return {
      props: { product: data },
      revalidate: 60,
    };
  };

function watchProductPAge({ product }) {
  return (
    <div className={styles.container}>
        <Link href={`/${product.category}`}>
            <div className={styles.breadcrumb}>{'<'} BACK</div>
        </Link>
        <div>
            <Image src={`/${product.image}/${product.image}2.jpeg`} width={500} height={600} />
        </div>
        <div className={styles.title}>
        <h2>{product.name}</h2>
        </div>
        <div className={styles.description}>
            {product.description}
        </div>
      <Footer src={'/rolexFooter.jpg'} width={1704} height={667} />

    </div>
    
  )
}

export default watchProductPAge