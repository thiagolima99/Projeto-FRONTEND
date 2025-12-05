import React from "react";

export default function Dashboard() {
  return (
     <section id="dashboard" tabIndex="-1">
      <h2 className="title-highlight">Painel Inteligente</h2>
      <p className="intro-text">
        Acompanhe o desempenho da loja, estoque, vendas e pontos de atenção em tempo real.
      </p>

      {/* SEÇÃO: INDICADORES PRINCIPAIS */}
      <section aria-label="Indicadores principais" className="dashboard-grid">
        <div className="dash-card">
          <h4>Produtos em Estoque</h4>
          <p>128 itens</p>
        </div>

        <div className="dash-card">
          <h4>Pedidos da Semana</h4>
          <p>42 vendas</p>
        </div>

        <div className="dash-card">
          <h4>Produtos com Baixo Estoque</h4>
          <p>7 itens</p>
        </div>
      </section>

      {/* SEÇÃO: AÇÕES RÁPIDAS */}
      <section aria-label="Ações rápidas" className="quick-actions">
        <h3 className="section-title">Ações Rápidas</h3>

        <div className="quick-buttons">
          <button>Adicionar Produto</button>
          <button>Atualizar Estoque</button>
          <button>Criar Promoção</button>
        </div>
      </section>

      {/* SEÇÃO: ALERTAS */}
      <section aria-label="Alertas" className="alerts-box">
        <h3 className="section-title">Alertas</h3>

        <ul>
          <li>🔥 3 produtos estão prestes a esgotar.</li>
          <li>⚠️ Há pedidos pendentes de confirmação.</li>
          <li>📦 Nova remessa chega amanhã.</li>
        </ul>
      </section>
    </section>
  );
}
