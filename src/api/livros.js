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

fetch("projeto-back-1630043243.us-west-2.elb.amazonaws.com:4010/livros", requestOptions)
  .then((response) => response.text())
  .then((result) => livrosResponse.push(result))
  .catch((error) => console.log("error", error));

module.exports = {
  livrosResponse,
};
