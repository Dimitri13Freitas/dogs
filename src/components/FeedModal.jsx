import React from "react";
import styles from "./FeedModal.module.css";
import { useFetch } from "../hooks/useFetch";
import { PHOTO_GET } from "../../api";
import { Error } from "../helper/Error";
import { PhotoContent } from "./PhotoContent";
import { Loading } from "../helper/Loading";

export const FeedModal = ({ photo }) => {
  const { data, error, load, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {load && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
