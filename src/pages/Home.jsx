import React from "react";
import { Feed } from "./Feed";
import { Loading } from "../helper/Loading";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Feed />
      {/* <Loading /> */}
    </section>
  );
};
