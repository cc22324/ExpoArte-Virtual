import { useState } from "react";

export default function Cadastro({ usuarios, setUsuarios, setTela }) {
  const [cadUser, setCadUser] = useState("");
  const [cadPass, setCadPass] = useState("");

  function cadastrar() {
    if (!cadUser || !cadPass) return alert("Preencha tudo");

    setUsuarios([...usuarios, { user: cadUser, pass: cadPass, obras: [] }]);
    alert("Cadastrado!");
    setTela("login");
  }

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <input placeholder="Usuário" onChange={(e) => setCadUser(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setCadPass(e.target.value)} />
      <button onClick={cadastrar}>Cadastrar</button>
      <button onClick={() => setTela("login")}>Voltar</button>
    </div>
  );
}