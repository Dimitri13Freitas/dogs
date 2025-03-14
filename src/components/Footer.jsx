import React from "react";
import style from "./Footer.module.css";
import { DogsFooter } from "../assets/dogs-footer";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <DogsFooter />
      <p>Dogs. Algusn direitos reservados.</p>
    </footer>
  );
};
