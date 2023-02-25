import React from "react";
import "./estilo.css";
const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
export default function OpcoesHeader() {
  return (
    <ul className="opcoes">
      {textoOpcoes.map((texto, i) => (
        <li className="opcao" key={i}>
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}
