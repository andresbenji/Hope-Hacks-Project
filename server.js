// const express = require("express");
// const app = express();
// const port = 6969;
// const fs = require("fs");

// app.listen(port, () => {
//   console.log(`Listening on port: ${port}`);
// });

const express = require("express");
const path = require("path"); //
const PORT = 5555;
const fetch = require("node-fetch");

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// const publicPath = path.join(__dirname, "public"); // creates a path to acesses the public folder

// app.use(express.static("public"));
// path ways to connect the front end to the back end

// ======================================

app.get("/randomfacts", (req, res) => {
  const url =
    "https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "149c53b18cmsh86a3344921d867bp1c8b53jsn52fb896d19de",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };
  const randomFacts = fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log(data.text);
        console.log(data.number);
        res.json(data);
      } else {
        res.status(400).send("Bad Request");
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/triviafacts", (req, res) => {
  const url =
    "https://numbersapi.p.rapidapi.com/42/trivia?fragment=true&notfound=floor&json=true";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ccdd56a97emshe2a0dd7beb36da2p185c5cjsn657bc15662af",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };
  const triviaFacts = fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log(data.text);
        res.json(data);
      } else {
        res.status(400).send("Request has failed");
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on local host ${PORT}`);
});
