import "./Header.css";
//import useJogoPedraPapelTesoura from "../hooks/useJogoPedraPapelTesoura";

const Header = ({ score }) => {
  //const { score } = useJogoPedraPapelTesoura();

  return (
    <nav>
      <div className="nav-container">
        <div className="title">
          <h1>Pedra Papel Tesoura</h1>
        </div>
        <div className="score">
          <p>Score</p>
          <p>{score}</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
