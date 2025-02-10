import React from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import { Feed } from "../assets/feed";
import { Estatisticas } from "../assets/estatisticas";
import { Adicionar } from "../assets/adicionar";
import styles from "./UserHeaderNav.module.css";

export const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <NavLink end to="/conta">
        <Feed />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <Adicionar />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
};
