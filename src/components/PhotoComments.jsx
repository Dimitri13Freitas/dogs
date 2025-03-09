import React from "react";
import { UserContext } from "../context/UserContext";
import { PhotoCommentsForm } from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

export const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((e, i) => (
          <li key={i}>
            <b>{e.comment_author}: </b>
            <span>{e.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm setComments={setComments} id={props.id} />}
    </>
  );
};
