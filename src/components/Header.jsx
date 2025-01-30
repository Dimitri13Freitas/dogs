import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};
