import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../../api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoad(false);
      setLogin(false);
      localStorage.removeItem("tk");
      navigate("/login");
    },
    [navigate],
  );

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const user = await response.json();
    setData(user);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoad(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Erro: Usuário inválido");
      console.log(response);
      const { token } = await response.json();
      localStorage.setItem("tk", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoad(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("tk");
      if (token) {
        try {
          setError(null);
          setLoad(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoad(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, load, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
