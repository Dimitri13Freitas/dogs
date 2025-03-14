import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { Dogs } from "../assets/dogs.jsx";
import { UserContext } from "../context/UserContext.jsx";

export const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={style.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={style.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};
