import { useState } from "react";

export default function Login({ usuarios, setUsuarioLogado, setTela }) {
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");

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

  return (
    <div className="container">
      <h2>Login</h2>
      <input placeholder="Usuário" onChange={(e) => setLoginUser(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setLoginPass(e.target.value)} />
      <button onClick={login}>Entrar</button>
      <button onClick={() => setTela("cadastro")}>Criar conta</button>
    </div>
  );
}