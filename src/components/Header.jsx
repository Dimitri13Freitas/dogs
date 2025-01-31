import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { Dogs } from "../assets/dogs.tsx";

export const Header = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={style.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};
