import React from "react";
import styled from "styled-components";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const Opcoes = styled.ul`
  display: flex;
`;
const Opcao = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`;
export default function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto, i) => (
        <Opcao key={i}>
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}
