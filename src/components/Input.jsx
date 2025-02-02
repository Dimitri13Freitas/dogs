import React from "react";
import style from "./Input.module.css";

export const Input = ({
  type,
  name,
  label,
  value,
  onChange,
  error,
  onBlur,
}) => {
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
        onBlur={onBlur}
      />
      {error && <p className={style.erro}>{error}</p>}
    </div>
  );
};
