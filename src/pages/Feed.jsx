import React from "react";
import { FeedModal } from "../components/FeedModal";
import { FeedPhotos } from "../components/FeedPhotos";

export const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  function infiniteScroll(e) {
    if (infinite) {
      let wait = false;
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.75 && !wait) {
        setPages((pages) => [...pages, pages.length + 1]);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, 500);
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);
  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModal={setModalPhoto} />}
      {pages.map((e) => (
        <FeedPhotos
          user={user}
          key={e}
          page={e}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
      {/* <FeedPhotos user={user} page="1" setModalPhoto={setModalPhoto} />
      <FeedPhotos user={user} page="2" setModalPhoto={setModalPhoto} /> */}
    </div>
  );
};
