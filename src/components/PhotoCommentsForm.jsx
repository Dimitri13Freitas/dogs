import React from "react";
import { Enviar } from "../assets/enviar";
import { useFetch } from "../hooks/useFetch";
import { COMMENT_POST } from "../../api";
import { Error } from "../helper/Error";
import styles from "./PhotoCommentsForm.module.css";

export const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error, data } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const tk = window.localStorage.getItem("tk");
    const { url, options } = COMMENT_POST(id, { comment }, tk);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((e) => [...e, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Commente algo..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};
