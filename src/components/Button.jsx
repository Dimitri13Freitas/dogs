import React from "react";
import style from "./Button.module.css";

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
};
