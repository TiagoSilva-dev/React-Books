import React from "react";

import logo from "../../imagens/logo.svg";
import "./estilo.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo-img" />
      <p>
        <strong>React</strong>Books
      </p>
    </div>
  );
}
