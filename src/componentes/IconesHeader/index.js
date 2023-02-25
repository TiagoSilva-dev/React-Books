import React from "react";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import "./estilo.css";

const icones = [perfil, sacola];

export default function IconesHeader() {
  return (
    <ul className="icones">
      {icones.map((icone, i) => (
        <li className="icone" key={i}>
          <img src={icone} alt="icones" />
        </li>
      ))}
    </ul>
  );
}
