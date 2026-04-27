export default function Feed({ usuarios, setTela }) {
  return (
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
  );
}