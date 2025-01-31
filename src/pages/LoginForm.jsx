import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useForm } from "../hooks/useForm";

export const LoginForm = () => {
  // const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");

  const username = useForm();
  const password = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    const response = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      options,
    );
    const json = await response.json();
    console.log(json);

    try {
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};
