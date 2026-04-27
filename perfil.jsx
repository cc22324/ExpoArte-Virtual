import { useState } from "react";

export default function Perfil({ usuarioLogado, usuarios, setUsuarios, setTela }) {
  const [novaObra, setNovaObra] = useState("");

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
    <div className="container">
      <h2>Perfil</h2>
      <p>{usuarioLogado?.user}</p>
      <input
        placeholder="Nova obra"
        value={novaObra}
        onChange={(e) => setNovaObra(e.target.value)}
      />
      <button onClick={adicionarObra}>Adicionar</button>
      <button onClick={() => setTela("feed")}>Ver Feed</button>
    </div>
  );
}