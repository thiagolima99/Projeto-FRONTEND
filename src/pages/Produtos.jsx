import React, { useState } from "react";
import produtosData from "../data/produtos";

export default function Produtos() {
  const [produtos] = useState(produtosData);

  const verProduto = (nome) => alert(`Ver: ${nome}`);
  const adicionarProduto = (nome) => alert(`Adicionado: ${nome}`);

  return (
   <section id="produtos" tabIndex="-1">
  <h2 className="title-highlight">Nossos Produtos</h2>

  <p className="intro-text">
    Confira nossa seleção de materiais profissionais. Qualidade, resistência e o melhor custo-benefício para sua obra e manutenção.
  </p>

  <ul className="product-grid">
    {produtos.map((prod) => (
      <li key={prod.nome}>
        <article className="product-card">
          <h3 className="product-title">{prod.nome}</h3>
          <p className="product-desc">{prod.descricao}</p>

          <div className="product-actions">
            <button type="button" onClick={() => verProduto(prod.nome)}>
              Ver Detalhes
            </button>

            <button type="button" onClick={() => adicionarProduto(prod.nome)}>
              Adicionar ao Carrinho
            </button>
          </div>
        </article>
      </li>
    ))}
  </ul>
</section>
  );
}
