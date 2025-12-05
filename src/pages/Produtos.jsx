import React from "react";

export default function Produtos({ produtos }) {
  const adicionarProduto = (nome) => {
    alert(`Adicionado ao carrinho: ${nome}`);
  };

  return (
    <section id="produtos" tabIndex="-1">
      <h2 className="title-highlight">Nossos Produtos</h2>

      <p className="intro-text">
        Confira nossa seleção de alimentos
      </p>

      <ul className="product-grid">
        {produtos.length === 0 && (
          <p>Nenhum produto cadastrado ainda.</p>
        )}

        {produtos.map((prod, index) => (
          <li key={index}>
            <article className="product-card">
              <h3 className="product-title">{prod.nome}</h3>

              <p className="product-desc">
                {prod.descricao ?? "Produto sem descrição"}
              </p>

              <div className="product-actions">
                <button 
                  type="button" 
                  onClick={() => adicionarProduto(prod.nome)}
                >
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
