import React from "react";
import styles from "./Photo.module.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { PHOTO } from "../../api";
import { Loading } from "../helper/Loading";
import { PhotoContent } from "./PhotoContent";
import { Head } from "../helper/Head";

export const Photo = () => {
  const { data, loading, error, request } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    const { url, options } = PHOTO(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};
