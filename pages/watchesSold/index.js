import React from 'react'
import styles from '../../styles/watches.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer'

export const getStaticProps = async () => {
    const data = await fetch(
      "https://www.robdiamond-be.co.uk/api/watchesSold"
    );
    const products = await data.json();
  
    return {
      props: {
        products: products,
      },
      revalidate: 60,
    };
  };

function watchesSold({products}) {
    return (
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>ROLEX SOLD</h1>
          </div>
          {products.map(product => (
    
            <div className={styles.productContainer} key={product._id}>
              <h2>{product.name}</h2>
              <div className={styles.reviewGrid}>
                  <div className={styles.reviewName}>{product.reviewName}</div>
                  <div className={styles.reviewDate}>{product.reviewDate}</div>
              </div>
              <div className={styles.reviewDescription}>{product.descriptionSmall}</div>
                
                <div>
                  <Image src={`/${product.category}/${product.image}.jpeg`} width={500} height={600} />
                </div>
            </div>
            
          ))}
          <Footer src={'/rolexFooter.jpg'} width={1704} height={667} />
    
        </div>
      )
    }

export default watchesSold

    
  