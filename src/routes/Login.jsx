import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../pages/LoginForm";
import { LoginCreate } from "../pages/LoginCreate";
import { LoginPasswordLost } from "../pages/LoginPasswordLost";
import { LoginPasswordReset } from "../pages/LoginPasswordReset";

export const Login = () => {
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
