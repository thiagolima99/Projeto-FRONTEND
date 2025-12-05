import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (text) => {
    alert(`Você clicou em: ${text}`);
  };

  const irParaProdutos = () => {
    navigate("/produtos");
  };

  return (
  <section id="home" tabIndex="-1">
  <h2 className="title-highlight">MERCADO DO BACANA</h2>

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
      aria-label="Ver Produtos"
      onClick={() => handleClick("Ver Produtos")}
      const onClick={irParaProdutos}
    >
      Ver Produtos
    </button>
  </div>
</section>
  );
}