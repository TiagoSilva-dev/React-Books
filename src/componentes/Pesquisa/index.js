import React from "react";
import { useState } from "react";
import { livros } from "./dadosPesquisa";
import styled from "styled-components";
import { Input } from "../Input";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #325489 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 470px;
  width: 100%;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }
`;

export default function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  const fazPesquisa = (event) => {
    const textoDigitado = event.target.value;
    const resultadoPesquisa = livros.filter((livro) =>
      livro.nome.includes(textoDigitado)
    );

    setLivrosPesquisados(resultadoPesquisa);
  };

  return (
    <PesquisaContainer>
      <Titulo>Já Sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(e) => fazPesquisa(e)}
      />
      {livrosPesquisados.map((livro) => (
        <Resultado>
          <img src={livro.src} alt="capa do livro" />
          <p>{livro.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}
