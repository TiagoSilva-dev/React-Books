import Logo from "./componentes/Logo";
import perfil from "./imagens/perfil.svg";
import sacola from "./imagens/sacola.svg";
import "./App.css";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
const icones = [perfil, sacola];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ul className="opcoes">
          {textoOpcoes.map((texto, i) => (
            <li className="opcao" key={i}>
              <p>{texto}</p>
            </li>
          ))}
        </ul>

        <ul className="icones">
          {icones.map((icone, i) => (
            <li className="icone" key={i}>
              <img src={icone} alt="icones" />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
