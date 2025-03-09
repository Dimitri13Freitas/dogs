import React from "react";
import styles from "./Image.module.css";

export const Image = ({ alt, props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}></div>
      <img src="" className={styles.image} alt={alt} {...props} />
    </div>
  );
};
