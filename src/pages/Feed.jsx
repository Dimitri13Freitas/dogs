import React from "react";
import { FeedModal } from "../components/FeedModal";
import { FeedPhotos } from "../components/FeedPhotos";

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModal={setModalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};
