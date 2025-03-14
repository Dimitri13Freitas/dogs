import React from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useForm } from "../hooks/useForm";
import { useFetch } from "../hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import { Error } from "../helper/Error";
import { Head } from "../helper/Head";

export const LoginPasswordLost = () => {
  const email = useForm();
  const { data, loading, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: "http://localhost:5173/login/perdeu",
      });
      const json = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...email} />
          {loading ? (
            <Button disabled>Enviando....</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};
