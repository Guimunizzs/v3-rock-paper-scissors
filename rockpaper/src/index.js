import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

// Cria a raiz da aplicação React
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/v3-rock-paper-scissors">
      {" "}
      {/* Configura o Router */}
      <App />
    </Router>
  </React.StrictMode>
);

// Se você quiser começar a medir o desempenho da sua aplicação,
// passe uma função para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Saiba mais em: https://bit.ly/CRA-vitals
reportWebVitals();
