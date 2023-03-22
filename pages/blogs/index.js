import React from "react";
import styles from "../../styles/watches.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export const getStaticProps = async () => {
  const data = await fetch("https://www.robdiamond-be.co.uk/api/blogs");
  const blogs = await data.json();

  return {
    props: {
      blogs: blogs,
    },
    revalidate: 60,
  };
};

function blogs({ blogs }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>ROLEX</h1>
      </div>
      {blogs.map((blog) => (
        <div
          className={styles.productContainer}
          key={blog._id}
          //   id={product.image}
        >
          <h2>{blog.title}</h2>
          <div>
            <Image
              src={`/${product.ref}${product.image}/${product.ref}${product.image}1.JPG`}
              width={1680}
              height={1120}
            />
          </div>
          <Link href={`/blogs/${[blog._id]}`}>
            <div className={styles.viewDetailsBTN}>
              <h4>VIEW DETAILS</h4>
            </div>
          </Link>
        </div>
      ))}
      <Footer src={"/rolexFooter.jpg"} width={1704} height={700} />
    </div>
  );
}

export default blogs;
