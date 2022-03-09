import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import styles from '../../styles/watchID.module.css'
import Link from 'next/link'
import Footer from '../../components/Footer'

import { ProductPageContext } from "../../productPageContext";


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
    const [added, setAdded] = useState(false);
    const [checkout, setCheckout] = useState(false);
    const [cartStorage, setCartStorage] = useState(() => {
      let storage;
  
      if (typeof window !== "undefined") {
        storage = localStorage.getItem("cartStorage");
      }
      return storage ? JSON.parse(storage) : [];
    });

    const [cart, setCart] = useContext(ProductPageContext);

    useEffect(() => {
      if (cartStorage.length > 0) {
        setCheckout(true);
      }
      localStorage.setItem("cartStorage", JSON.stringify(cartStorage));
      const storageLocal = JSON.parse(localStorage.getItem("cartStorage"));
      setCart(storageLocal);
    }, [cartStorage]);


    const addToCart = () => {
      setCartStorage((cartStorage) => [...cartStorage, product]);
      setAdded(true);
      setTimeout(() => setAdded(false), 5000);
    }


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
        <div className={styles.title}>
        <h2>{product.name}</h2>
        </div>
        <div className={styles.imageContainer}>
            <Image src={`/${product.image}/${product.image}${imageNumber}.jpeg`} width={500} height={600} />
            <div className={styles.rightArrow} onClick={handleNextSlide}>
              <Image src={`/rightArrow.svg`} width={50} height={50} />
            </div>
            <div className={styles.leftArrow} onClick={handlePreviousSlide}>
              <Image src={`/leftArrow.svg`} width={50} height={50} />
            </div>
        </div>
        
        <div className={styles.descriptionSmallContainer}>
          <p>{product.descriptionSmall}</p>
        </div>
        <div className={styles.specContainer}>
          <div className={styles.specLabel}>
            <div className={styles.specLabelinBetween}>Model</div>
            <div className={styles.specLabelinBetween}>Ref</div>
            <div className={styles.specLabelinBetween}>Year</div>
            <div className={styles.specLabelinBetween}>Box</div>
            <div className={styles.specLabelinBetween}>Papers</div>
            <div className={styles.specLabelinBetween}>Condition</div>
            <div className={styles.specLabelinBetween}>Available</div>
            <div className={styles.specLabelinBetween}>Movement</div>
            <div className={styles.specLabelinBetween}>Case Material</div>
            <div className={styles.specLabelinBetween}>Braclet Material</div>
            <div className={styles.specLabelinBetween}>Case Size</div>
            <div className={styles.specLabelinBetween}>Dial</div>
            <div className={styles.specLabelinBetween}>Address</div>
            <div className={styles.specLabelinBetween}>Walkings</div>
            <div className={styles.specLabelinBetween}>Appointment</div>


          </div>
          <div className={styles.specValueContainer}>
            <div className={styles.specValue}>{product.model}</div>
            <div className={styles.specValueinBetween}>{product.ref}</div>
            <div className={styles.specValue}>{product.year}</div>
            <div className={styles.specValueinBetween}>{product.box}</div>
            <div className={styles.specValue}>{product.papers}</div>
            <div className={styles.specValueinBetween}>{product.condition}</div>
            <div className={styles.specValue}>{product.availble}</div>
            <div className={styles.specValueinBetween}>{product.movement}</div>
            <div className={styles.specValue}>{product.caseMaterial}</div>
            <div className={styles.specValueinBetween}>{product.braceletMaterial}</div>
            <div className={styles.specValue}>{product.caseSize}</div>
            <div className={styles.specValueinBetween}>{product.dial}</div>
            <div className={styles.specValue}>{product.address}</div>
            <div className={styles.specValueinBetween}>{product.walkings}</div>
            <div className={styles.specValue}>{product.appointment}</div>


          </div>
        </div>
        <div className={styles.addToBasketBtn} onClick={addToCart}>
          <a>ADD TO BASKET</a>
        </div>
        {added && (
        <div className={styles.addSuccessMessage}>
          Your Item has been added to the basket
        </div>
        )}
        <Link href="/Cart">
        <div className={checkout ? styles.checkoutBtn : styles.displayNone}>
          <a>CHECKOUT</a>
        </div>
        </Link>
        
        <div className={styles.description}>
            {product.description}
        </div>

        <div className={styles.viewDetailsBTN}>
            <h4><a href='tel:07976753254'>CALL FOR DETAILS</a></h4>
        </div>
       
      <Footer src={'/rolexFooter.jpg'} width={1704} height={700} />

    </div>
    
  )
}

export default WatchProductPage