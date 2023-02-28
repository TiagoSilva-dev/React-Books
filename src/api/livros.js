var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "";

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

const livrosResponse = [];

fetch("http://localhost:8010/livros", requestOptions)
  .then((response) => response.text())
  .then((result) => livrosResponse.push(result))
  .catch((error) => console.log("error", error));

module.exports = {
  livrosResponse,
};
