import { useState } from "react";

const useJogoPedraPapelTesoura = () => {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [escolhaComputador, setEscolhaComputador] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [score, setScore] = useState(0); // Estado do score

  const opcoes = ["Pedra", "Papel", "Tesoura"];

  const jogar = (escolha) => {
    setEscolhaJogador(escolha);
    console.log(`Escolha do jogador: ${escolha}`);
    const escolhaComp = opcoes[Math.floor(Math.random() * 3)];
    setEscolhaComputador(escolhaComp);

    // Determina o vencedor
    if (escolha === escolhaComp) {
      setResultado("Empate!");
    } else if (
      (escolha === "Pedra" && escolhaComp === "Tesoura") ||
      (escolha === "Papel" && escolhaComp === "Pedra") ||
      (escolha === "Tesoura" && escolhaComp === "Papel")
    ) {
      setResultado("Você ganhou!");
      setScore((prevScore) => prevScore + 1); // Incrementa o score quando o jogador ganha
    } else {
      setResultado("Você perdeu!");
    }
  };

  const resetGame = () => {
    setEscolhaJogador(null);
    setEscolhaComputador(null);
    setResultado(null);
    //setScore(0);
  };
  return {
    escolhaJogador,
    escolhaComputador,
    resultado,
    score,
    jogar,
    resetGame,
  };
};

export default useJogoPedraPapelTesoura;
