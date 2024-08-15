import React from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";

const Game = ({ escolhaJogador, escolhaComputador, resultado, resetGame }) => {
  const navigate = useNavigate();

  const handleReset = () => {
    resetGame();
    navigate("/");
  };

  return (
    <div>
      <h1>Resultado do Jogo</h1>
      <div className="container">
        <p className="escolha">
          Você escolheu:<span>{escolhaJogador}</span>{" "}
        </p>
        <p className="escolha">
          O computador escolheu:<span>{escolhaComputador}</span>{" "}
        </p>
      </div>
      <h2>{resultado}</h2>
      <button className="button-reset" onClick={handleReset}>
        Reiniciar jogo
      </button>
    </div>
  );
};

export default Game;
