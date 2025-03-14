import React from "react";
import { useParams } from "react-router-dom";
import { Feed } from "./Feed";
import { Head } from "../helper/Head";

export const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Head title={user} />

      <Feed user={user} />
    </section>
  );
};
