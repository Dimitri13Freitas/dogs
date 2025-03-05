import React from "react";
import styles from "./UserPhotoPost.module.css";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useForm } from "../hooks/useForm";
import { useFetch } from "../hooks/useFetch";
import { PHOTO_POST } from "../../api";
import { Error } from "../helper/Error";
import { useNavigate } from "react-router-dom";

export const UserPhotoPost = () => {
  const nome = useForm();
  const idade = useForm("number");
  const peso = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, load, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = localStorage.getItem("tk");
    const { url, options } = PHOTO_POST(token, formData);

    request(url, options);
  }

  function handleChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <Input
          className={styles.file}
          type="file"
          name="idade"
          id="img"
          onChange={handleChange}
        />
        {load ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};
