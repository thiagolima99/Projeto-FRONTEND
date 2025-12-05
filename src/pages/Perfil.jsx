import { useState } from "react";

export default function Perfil() {
  const [nome, setNome] = useState("Administrador");
  const [email] = useState("teste@exemplo.com");
  const [editando, setEditando] = useState(false);
  const [novoNome, setNovoNome] = useState(nome);

  // FOTO
  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const salvarNome = () => {
    if (!novoNome.trim()) return alert("Digite um nome válido.");
    setNome(novoNome.trim());
    setEditando(false);
  };

  const alterarFoto = (e) => {
    const arquivo = e.target.files[0];
    if (!arquivo) return;

    setFoto(arquivo);
    setPreview(URL.createObjectURL(arquivo));
  };

  return (
    <section id="perfil" tabIndex="-1">
      <h2 className="title-highlight">Meu Perfil</h2>

      <div className="profile-card">
        
        <label className="profile-avatar">
          {preview ? (
            <img src={preview} alt="Foto de perfil" />
          ) : (
            <span>{nome[0]}</span>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={alterarFoto}
            className="hidden-file"
          />
        </label>

        <dl className="profile-info">

          <dt>Nome</dt>
          <dd>
            {editando ? (
              <input
                type="text"
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
                className="profile-input"
              />
            ) : (
              nome
            )}
          </dd>

          <dt>Email</dt>
          <dd>{email}</dd>

          <dt>Foto</dt>
          <dd className="foto-dd">Clique na foto para alterar</dd>
        </dl>

        <div className="profile-actions">
          {editando ? (
            <>
              <button type="button" onClick={salvarNome}>
                Salvar
              </button>
              <button
                type="button"
                onClick={() => {
                  setNovoNome(nome);
                  setEditando(false);
                }}
              >
                Cancelar
              </button>
            </>
          ) : (
            <button type="button" onClick={() => setEditando(true)}>
              Editar Perfil
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
