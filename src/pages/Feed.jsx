import React from "react";
import { FeedModal } from "../components/FeedModal";
import { FeedPhotos } from "../components/FeedPhotos";

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};
