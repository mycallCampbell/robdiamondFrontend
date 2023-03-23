import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/blogID.module.css";
import Link from "next/link";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { ProductPageContext } from "../../productPageContext";

export const getStaticPaths = async () => {
  const res = await fetch("https://www.robdiamond-be.co.uk/api/blogs");
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
  const res = await fetch("https://www.robdiamond-be.co.uk/api/blog/" + id);

  const data = await res.json();

  return {
    props: { blog: data },
    revalidate: 60,
  };
};

function BlogId({ blog }) {
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

  return (
    <div className={styles.container}>
      {/* <Link href={`/${blog.category}#${blog._id}`}>
        <div className={styles.breadcrumb}>{"<"} BACK</div>
      </Link> */}
      <div className={styles.title}>
        <h2>{blog.title}</h2>
      </div>

      <div className={styles.image}>
        <Image
          src={`/blogs/${blog.imageRef1}.JPEG`}
          width={1024}
          height={683}
        />
      </div>

      {/* CTA BUTTONS */}

      <div className={styles.viewDetailsBTN}>
        <h4>
          <a href="tel:07976753254">CALL FOR DETAILS</a>
        </h4>
      </div>
      <div className={styles.viewDetailsBTN}>
        <Link
          href={"https://wa.me/447976753254?text=Welcome%20to%20RobDiamond"}
        >
          <h4>WHATSAPP</h4>
        </Link>
      </div>

      <Footer src={"/footer_rose.JPG"} width={3360} height={2240} />
    </div>
  );
}

export default BlogId;
