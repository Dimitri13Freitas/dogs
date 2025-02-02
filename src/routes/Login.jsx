import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "../pages/LoginForm";
import { LoginCreate } from "../pages/LoginCreate";
import { LoginPasswordLost } from "../pages/LoginPasswordLost";
import { LoginPasswordReset } from "../pages/LoginPasswordReset";
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="forget" element={<LoginPasswordLost />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};
