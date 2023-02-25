import React from "react";

import logo from "../../imagens/logo.svg";

import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;
const ImageLogo = styled.img`
  margin-right: 10px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <ImageLogo src={logo} alt="logo" />
      <p>
        <strong>React</strong>Books
      </p>
    </LogoContainer>
  );
}
