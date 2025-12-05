import React, { useState } from "react";

export default function Dashboard() {
  
  const [produtos, setProdutos] = useState([]);

 
  function handleAddProduct() {
    const nome = prompt("Digite o nome do produto:");

    if (!nome || nome.trim() === "") return;

    setProdutos((prev) => [...prev, nome.trim()]);

    alert("Produto adicionado!");
  }

  return (
    <section id="estoque" tabIndex="-1">
      <h2 className="title-highlight">Estoque</h2>
      <p className="intro-text">
        Acompanhe o estoque, vendas e pontos de atenção em tempo real.
      </p>

      {/* SEÇÃO: INDICADORES PRINCIPAIS */}
      <section aria-label="Indicadores principais" className="dashboard-grid">
        <div className="dash-card">
          <h4>Produtos em Estoque</h4>
          <p>06 itens</p>
        </div>

        <div className="dash-card">
          <h4>Pedidos da Semana</h4>
          <p>42 vendas</p>
        </div>

        <div className="dash-card">
          <h4>Produtos com Baixo Estoque</h4>
          <p>02 itens</p>
        </div>
      </section>

      {/* SEÇÃO: AÇÕES RÁPIDAS */}
      <section aria-label="Ações rápidas" className="quick-actions">
        <h3 className="section-title">Ações Rápidas</h3>

        <div className="quick-buttons">
          <button onClick={handleAddProduct}>Adicionar Produto</button>
          <button>Atualizar Estoque</button>
        </div>
      </section>

      {/* SEÇÃO: ALERTAS */}
      <section aria-label="Alertas" className="alerts-box">
        <h3 className="section-title">Alertas</h3>

        <ul>
          {/* Lista todos os produtos adicionados */}
          {produtos.map((p, i) => (
            <li key={i}>{p}</li>
          ))}

          <li>Há pedidos pendentes de confirmação.</li>
          <li>Nova remessa chega amanhã.</li>
        </ul>
      </section>
    </section>
  );
}
