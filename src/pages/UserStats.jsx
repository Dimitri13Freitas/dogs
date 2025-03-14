import React from "react";
import { Head } from "../helper/Head";
import { useFetch } from "../hooks/useFetch";
import { STATS_GET } from "../../api";
import { Loading } from "../helper/Loading";
import { Error } from "../helper/Error";
import { UserStatsGraphs } from "../components/UserStatsGraphs";

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const tk = localStorage.getItem("tk");
      const { url, options } = STATS_GET(tk);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatisticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};
