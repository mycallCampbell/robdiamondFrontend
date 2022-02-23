import React, { useState } from 'react'
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

  
  function WatchProductPage({ product }) {
    
    const [imageNumber, setImageNumber] = useState(1);

    const handleNextSlide = () => {
      if(product.imageAmount > imageNumber){
        setImageNumber(imageNumber + 1);
        console.log(imageNumber)
      }
    }

    const handlePreviousSlide = () => {
      if(imageNumber !== 1){
        setImageNumber(imageNumber - 1);
      }
    }
    
    return (
    <div className={styles.container}>
        <Link href={`/${product.category}`}>
            <div className={styles.breadcrumb}>{'<'} BACK</div>
        </Link>
        <div className={styles.imageContainer}>
            <Image src={`/${product.image}/${product.image}${imageNumber}.jpeg`} width={500} height={600} />
            <div className={styles.rightArrow} onClick={handleNextSlide}>
              <Image src={`/rightArrow.svg`} width={50} height={50} />
            </div>
            <div className={styles.leftArrow} onClick={handlePreviousSlide}>
              <Image src={`/leftArrow.svg`} width={50} height={50} />
            </div>
        </div>
        <div className={styles.title}>
        <h2>{product.name}</h2>
        </div>
        <div className={styles.description}>
            {product.description}
        </div>
        <div className={styles.viewDetailsBTN}>
            <h4><a href='tel:07895609010'>CALL FOR DETAILS</a></h4>
        </div>
      <Footer src={'/rolexFooter.jpg'} width={1704} height={667} />

    </div>
    
  )
}

export default WatchProductPage