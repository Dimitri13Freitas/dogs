import React from "react";
import styles from "./FeedModal.module.css";
import { useFetch } from "../hooks/useFetch";
import { PHOTO_GET } from "../../api";
import { Error } from "../helper/Error";
import { PhotoContent } from "./PhotoContent";
import { Loading } from "../helper/Loading";

export const FeedModal = ({ photo, setModal }) => {
  const { data, error, load, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) setModal(null);
  }

  return (
    <div className={styles.modal} onClick={handleClickOutside}>
      {error && <Error error={error} />}
      {load && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
