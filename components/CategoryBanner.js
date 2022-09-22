import Image from "next/image";
import styles from "./CategoryBanner.module.css";

function CategoryBanner({ imageUrl, width, height }) {
  return (
    <section className={styles.parentContainer}>
      <div className={styles.itemImageContainer}>
        <Image src={imageUrl} width={width} height={height} />
      </div>
    </section>
  );
}

export default CategoryBanner;
