import React from "react";
import { UserHeader } from "../components/UserHeader";
import { Route, Routes } from "react-router-dom";
import { UserPhotoPost } from "../pages/UserPhotoPost";
import { UserStats } from "../pages/UserStats";
import { Feed } from "../pages/Feed";
import { UserContext } from "../context/UserContext";
import { NotFound } from "../components/NotFound";
import { Head } from "../helper/Head";

export const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
