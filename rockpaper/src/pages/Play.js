import "./Play.css";
import { useNavigate } from "react-router-dom";
//import useJogoPedraPapelTesoura from "../hooks/useJogoPedraPapelTesoura.js";

const Play = ({ jogar }) => {
  //const { jogar } = useJogoPedraPapelTesoura();
  const navigate = useNavigate();

  const handleJogar = (escolha) => {
    jogar(escolha);
    navigate("/game");
  };

  return (
    <div className="play">
      <div className="play-container">
        <button className="options" onClick={() => handleJogar("Pedra")}>
          Pedra
        </button>
        <button className="options" onClick={() => handleJogar("Papel")}>
          Papel
        </button>
        <button className="options" onClick={() => handleJogar("Tesoura")}>
          Tesoura
        </button>
      </div>
    </div>
  );
};

export default Play;
