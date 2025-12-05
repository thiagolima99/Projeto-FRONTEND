import React from "react";

export default function Home() {
  const handleClick = (text) => {
    alert(`Você clicou em: ${text}`);
  };

  return (
  <section id="home" tabIndex="-1">
  <h2 className="title-highlight">MERCADO 4 IRMÕES</h2>

  <p className="intro-text">
    Bem-vindo ao nosso mercado! Aqui você encontra variedade, preço justo e produtos de qualidade.
  </p>

  <div className="info-box">
    <h3>Últimas novidades</h3>
    <ul className="news-list">
      <li>Promoção de fim de semana — confira!</li>
      <li>Novos materiais chegando ao estoque</li>
      <li>Horário especial para clientes cadastrados</li>
    </ul>
  </div>

  <div className="action-area">
    <button
      type="button"
      aria-label="Ação 1"
      onClick={() => handleClick("Ação 1")}
    >
      Ação 1
    </button>

    <button
      type="button"
      aria-label="Ação 2"
      onClick={() => handleClick("Ação 2")}
    >
      Ação 2
    </button>
  </div>
</section>
  );
}