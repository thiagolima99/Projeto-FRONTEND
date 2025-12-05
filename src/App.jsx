import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Perfil from "./pages/Perfil";

import "./styles/index.css";
import "./styles/style.css";
import "./styles/App.css";

import { useState, useEffect } from "react";

export default function App() {
  const [tema, setTema] = useState("dark");

  useEffect(() => {
    if (tema === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [tema]);

  return (
    <BrowserRouter>
      <header>
        <h1>Mercado dos 4 Irmões</h1>

        {/* BOTÃO DE TEMA
        <button
          className="theme-btn"
          onClick={() => setTema(tema === "dark" ? "light" : "dark")}
        >
          {tema === "dark" ? "Light Mode" : "Dark Mode"}
        </button>*/}

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </main>

      <footer>
        <p>Mercado 4 Irmões</p>
      </footer>
    </BrowserRouter>
  );
}