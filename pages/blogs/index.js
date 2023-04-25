import React from "react";
import styles from "../../styles/blogs.module.css";
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
      <div className={styles.headerTitle}>
        <h3>LATEST BLOGS</h3>
      </div>
      {blogs.map((blog) => {
        return (
          <div className={styles.container} key={blog._id}>
            <div className={styles.image}>
              <Image src={`/#}`} width={1024} height={683} />
            </div>
            <div className={styles.subTitle1}>{blog.subTitle1}</div>
            <Link href={`/blogs/${blog._id}`}>
              <div className={styles.CTAbutton}>
                <h4>FIND OUT MORE</h4>
              </div>
            </Link>
          </div>
        );
      })}
      <Footer src={"/rolexFooter.jpg"} width={1704} height={700} />
    </div>
  );
}

export default blogs;
