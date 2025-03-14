import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "../pages/LoginForm";
import { LoginCreate } from "../pages/LoginCreate";
import { LoginPasswordLost } from "../pages/LoginPasswordLost";
import { LoginPasswordReset } from "../pages/LoginPasswordReset";
import { UserContext } from "../context/UserContext";
import styles from "./Login.module.css";
import { NotFound } from "../components/NotFound";

export const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};
