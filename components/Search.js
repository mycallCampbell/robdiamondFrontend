import styles from "./Search.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
export const getStaticProps = async () => {
  const data = await fetch("https://www.robdiamond-be.co.uk/api/watches");
  const products = await data.json();

  return {
    props: {
      products: products,
    },
    revalidate: 60,
  };
};

export default function Search({ products }) {
  const [nickName, setNickName] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const target = e.target.value.toLowerCase();
    setNickName(target);
  };

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://www.robdiamond-be.co.uk/api/watches"
      );
      console.log(response.data);
      const data = response.data;
      data.map(
        (item) =>
          item.nickName == nickName
            ? router.push(`/watches/${[item._id]}`)
            : console.log("no")
        // (item) => nickName === item.description1 ?? <>{console.log()}</>
      );
    } catch {
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getProducts();
  };

  return (
    <div className={styles.searchContainer}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0"
      />

      <input
        className={styles.input}
        name="email"
        type="text"
        placeholder="Search Rolex NickName Here.... i.e Batman"
        value={nickName}
        onChange={(e) => handleChange(e)}
      />
      <div
        className={styles.find}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Find
      </div>
    </div>
  );
}
