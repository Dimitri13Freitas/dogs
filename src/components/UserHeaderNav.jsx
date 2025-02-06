import React from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";

export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  return (
    <nav>
      <NavLink to="/conta">Minhas Fotos</NavLink>
      <NavLink to="/conta/estatisticas">Estatisticas</NavLink>
      <NavLink to="/conta/postar">Adicionar Foto</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
};
