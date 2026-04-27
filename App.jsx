import { useState } from "react";
import Login from "./components/loginogin";
import Cadastro from "./components/cadastro";
import Perfil from "./components/perfil";
import Feed from "./components/feed";
import "./App.css";

export default function App() {
  const [tela, setTela] = useState("login");
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  return (
    <div className="app">
      {tela === "login" && (
        <Login
          usuarios={usuarios}
          setUsuarioLogado={setUsuarioLogado}
          setTela={setTela}
        />
      )}

      {tela === "cadastro" && (
        <Cadastro
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          setTela={setTela}
        />
      )}

      {tela === "perfil" && (
        <Perfil
          usuarioLogado={usuarioLogado}
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          setTela={setTela}
        />
      )}

      {tela === "feed" && (
        <Feed usuarios={usuarios} setTela={setTela} />
      )}
    </div>
  );
}