import React, { useState } from "react";

export default function Calendar() {
  const [eventos, setEventos] = useState([
    { data: "2025-12-01", titulo: "Evento A" },
    { data: "2025-12-05", titulo: "Evento B" },
    { data: "2025-12-10", titulo: "Evento C" }
  ]);

  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!titulo || !data) {
      alert("Preencha título e data.");
      return;
    }
    setEventos((prev) => [...prev, { data, titulo }]);
    setTitulo("");
    setData("");
  };

  return (
    <section id="calendar" tabIndex="-1">
      <h2 className="title-highlight">Agenda & Calendário</h2>

      <p className="intro-text">
        Gerencie compromissos, horários de entrega, reuniões e eventos importantes.
      </p>

      {/* LISTA DE EVENTOS */}
      <ul className="event-list">
        {eventos.map((ev, i) => (
          <li key={i} className="event-card">
            <div className="event-date">
              <strong>{new Date(ev.data).toLocaleDateString()}</strong>
            </div>

            <div className="event-info">
              <h4>{ev.titulo}</h4>
            </div>
          </li>
        ))}
      </ul>

      {/* FORMULARIO */}
      <form onSubmit={handleAdd} className="event-form" noValidate>
        <h3>Adicionar Evento</h3>

        <label htmlFor="evt-title">Título</label>
        <input
          id="evt-title"
          type="text"
          placeholder="Nome do evento"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label htmlFor="evt-date">Data</label>
        <input
          id="evt-date"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>
    </section>
  );
}