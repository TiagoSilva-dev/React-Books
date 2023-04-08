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
    axios.get(`http://projeto-back-625438535.us-west-2.elb.amazonaws.com:4010/livros`).then((response) => {
      console.log(response);
      setData(response.data); 
    });
  }, []);

  return (
    <UltimosLancamentosContainer>
      <Titulo>Ultimos Lançamentos</Titulo>
      <div
        style={{ margin: "0 auto", display: "flex", flexDirection: "column" }}
      >
        {data?.map((livro, i) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
               alignItems: "center",
            }}
          >
            <img
              src={livro.Src.String}
              alt="livro"
              key={i}
              style={{ margin: 10, width: 300 }}
            />
            <h3>{livro.Nome}</h3>
            <h4>{livro.Descricao.String}</h4>
          </div>
        ))}
      </div>
    </UltimosLancamentosContainer>
  );
}
