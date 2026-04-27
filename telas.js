import { useState, useEffect } from "react";

export default function App() {
  const [tela, setTela] = useState("login");
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const [cadUser, setCadUser] = useState("");
  const [cadPass, setCadPass] = useState("");

  const [novaObra, setNovaObra] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  function cadastrar() {
    if (!cadUser || !cadPass) return alert("Preencha tudo");

    setUsuarios([...usuarios, { user: cadUser, pass: cadPass, obras: [] }]);
    alert("Cadastrado!");
    setTela("login");
  }

  function login() {
    const user = usuarios.find(
      (u) => u.user === loginUser && u.pass === loginPass
    );

    if (user) {
      setUsuarioLogado(user);
      setTela("perfil");
    } else {
      alert("Login inválido");
    }
  }

  function adicionarObra() {
    if (!novaObra) return alert("Digite uma obra");

    const novos = usuarios.map((u) => {
      if (u.user === usuarioLogado.user) {
        return { ...u, obras: [...u.obras, novaObra] };
      }
      return u;
    });

    setUsuarios(novos);
    setNovaObra("");
  }

  return (
    <div className="app">
      {tela === "login" && (
        <div className="container">
          <h2>Login</h2>
          <input placeholder="Usuário" onChange={(e) => setLoginUser(e.target.value)} />
          <input type="password" placeholder="Senha" onChange={(e) => setLoginPass(e.target.value)} />
          <button onClick={login}>Entrar</button>
          <button onClick={() => setTela("cadastro")}>Criar conta</button>
        </div>
      )}

      {tela === "cadastro" && (
        <div className="container">
          <h2>Cadastro</h2>
          <input placeholder="Usuário" onChange={(e) => setCadUser(e.target.value)} />
          <input type="password" placeholder="Senha" onChange={(e) => setCadPass(e.target.value)} />
          <button onClick={cadastrar}>Cadastrar</button>
          <button onClick={() => setTela("login")}>Voltar</button>
        </div>
      )}

      {tela === "perfil" && (
        <div className="container">
          <h2>Perfil</h2>
          <p>{usuarioLogado?.user}</p>
          <input placeholder="Nova obra" value={novaObra} onChange={(e) => setNovaObra(e.target.value)} />
          <button onClick={adicionarObra}>Adicionar</button>
          <button onClick={() => setTela("feed")}>Ver Feed</button>
        </div>
      )}

      {tela === "feed" && (
        <div className="container">
          <h2>Obras</h2>
          {usuarios.map((u, i) => (
            <div key={i}>
              {u.obras.map((o, j) => (
                <div key={j} className="card">
                  <strong>{u.user}</strong>
                  <p>{o}</p>
                </div>
              ))}
            </div>
          ))}
          <button onClick={() => setTela("perfil")}>Voltar</button>
        </div>
      )}
    </div>
  );
}


