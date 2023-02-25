import React from "react";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from "styled-components";

const icones = [perfil, sacola];

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

export default function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone, i) => (
        <Icone key={i}>
          <img src={icone} alt="icones" />
        </Icone>
      ))}
    </Icones>
  );
}
