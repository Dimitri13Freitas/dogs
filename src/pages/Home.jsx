import React from "react";
import { Feed } from "./Feed";
import { Head } from "../helper/Head";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do Site " />
      <Feed />
    </section>
  );
};
