import React, { useEffect } from "react";
import axios from "axios";

export default function dadosUltimosLançamentos() {
  axios
    .get("http://localhost:8010/livros", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      },
    })
    .then((response) => {
      console.log(response);
    });

  return <div>dadosUltimosLançamentos</div>;
}
