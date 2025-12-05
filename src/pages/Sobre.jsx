import React from "react";

export default function Sobre() {
  return (
  <section id="sobre" tabIndex="-1">
  <h2 className="title-highlight">Sobre a Loja</h2>

  <p className="intro-text">
    Somos uma loja especializada em materiais de alta qualidade, oferecendo produtos para obras,
    reformas, manutenção e uso profissional. Nosso compromisso é garantir variedade, bom preço e
    atendimento eficiente.
  </p>

  <div className="info-box">
    <dl className="data-list">
      <dt>Missão</dt>
      <dd>Atender clientes com agilidade, oferecendo materiais confiáveis e preços competitivos.</dd>

      <dt>Principais Produtos</dt>
      <dd>Materiais de construção, ferramentas, elétrica, hidráulica e itens para manutenção.</dd>

      <dt>Diferenciais</dt>
      <dd>Qualidade garantida, suporte especializado, entrega rápida e estoque atualizado.</dd>
    </dl>
  </div>
</section>
  );
}
