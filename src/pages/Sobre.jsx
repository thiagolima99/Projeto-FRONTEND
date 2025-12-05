import React from "react";

export default function Sobre() {
  return (
  <section id="sobre" tabIndex="-1">
  <h2 className="title-highlight">Sobre o mercado</h2>

  <p className="intro-text">
    Somos um mercado de alta qualidade, oferecendo produtos de qualidade,
    Nosso compromisso é garantir variedade, bom preço e
    atendimento eficiente.
  </p>

  <div className="info-box">
    <dl className="data-list">
      <dt>Temos a missão</dt>
      <dd>Atender clientes com agilidade, oferecendo produtos de qualidade e preços competitivos.</dd>

      <dt>Diferenciais</dt>
      <dd>Qualidade garantida, suporte especializado, entrega rápida e estoque atualizado.</dd>
    </dl>
  </div>
</section>
  );
}
