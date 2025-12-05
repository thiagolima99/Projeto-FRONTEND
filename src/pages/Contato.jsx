import React, { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email) {
      alert("Por favor, preencha nome e email.");
      return;
    }

    alert(
      `Mensagem enviada:\n\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    );

    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <section id="contato" tabIndex="-1">
      <h2 className="title-highlight">Contato</h2>

      <p className="intro-text">
        Fale com nossa equipe. Respondemos rápido e estamos prontos para ajudar.
      </p>

      <form onSubmit={handleSubmit} className="form-modern" noValidate>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="5"
            placeholder="Digite sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="glow-button">
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}