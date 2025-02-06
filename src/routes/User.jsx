import React from "react";
import { UserHeader } from "../components/UserHeader";
import { Route, Routes } from "react-router-dom";
import { UserPhotoPost } from "../pages/UserPhotoPost";
import { UserStats } from "../pages/UserStats";
import { Feed } from "../pages/Feed";

export const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};
