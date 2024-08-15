import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import useJogoPedraPapelTesoura from "./hooks/useJogoPedraPapelTesoura";
// pages
import Play from "./pages/Play";
import Game from "./pages/Game";

// components

import Header from "./components/Header";

function App() {
  const jogo = useJogoPedraPapelTesoura();
  return (
    <div className="App">
      <BrowserRouter>
        <Header score={jogo.score} />
        <Routes>
          <Route path="/" element={<Play jogar={jogo.jogar} />} />
          <Route path="/game" element={<Game {...jogo} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
