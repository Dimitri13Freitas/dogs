import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import { useFetch } from "../hooks/useFetch";

export const PhotoDelete = ({ id }) => {
  const { load, request } = useFetch();

  async function handleClick() {
    const tk = window.localStorage.getItem("tk");
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id, tk);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {load ? (
        <button disabled className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};
