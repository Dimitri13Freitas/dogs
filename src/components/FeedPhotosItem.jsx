import React from "react";
import styles from "./FeedPhotosItem.module.css";
import { Image } from "../helper/Image";

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li onClick={handleClick} className={styles.photo}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};
