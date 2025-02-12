import React from "react";
import { UserHeaderNav } from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";
export const UserHeader = () => {
  const [title, setTiltle] = React.useState(null);

  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTiltle("Poste seu foto");
        break;
      case "/conta/estatisticas":
        setTiltle("Estatísticas");
        break;
      default:
        setTiltle("Minha Conta");
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
