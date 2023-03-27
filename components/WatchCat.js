import React from "react";
import styles from "../styles/watches.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

function WatchCat({ products }) {
  const [data, setDate] = useState([]);

  const capitaliseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  capitaliseFirstLetter(products);

  //  CLIENT SIDE FETCH
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://www.robdiamond-be.co.uk/api/watchesModelDaytona`
        );
        setDate(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>FEATURED</h1>
      </div>

      <div className={styles.imageContainer}>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className={styles.swiper}
        >
          <div className={styles.swiperWrapper}>
            {data.map((product, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <Image
                  src={`/watches/${product.model}${product.ref}/${product.ref}${product.model}1.JPG`}
                  width={150}
                  height={100}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default WatchCat;
