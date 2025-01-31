import React from "react";
import style from "./Input.module.css";

export const Input = ({ type, name, label, value, onChange, ...props }) => {
  console.log(value);
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        className={style.input}
        type={type}
      />
      <p className={style.erro}>Erros</p>
    </div>
  );
};
