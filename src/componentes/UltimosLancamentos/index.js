import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
`;

export default function UltimosLancamentos() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8010/livros", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
        },
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <UltimosLancamentosContainer>
      <Titulo>Ultimos Lançamentos</Titulo>
      <div style={{ margin: "0 auto" }}>
        {data.map((livro, i) => (
          <img
            src={livro.src}
            alt="livro"
            key={i}
            style={{ margin: 10, width: 300 }}
          />
        ))}
      </div>
    </UltimosLancamentosContainer>
  );
}
