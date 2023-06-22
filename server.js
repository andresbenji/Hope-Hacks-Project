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

app.listen(PORT, () => {
  console.log(`Listening on local host ${PORT}`);
});

app.get("/mathFact", (req,res) => {
  const mathURL= 
   "https://numbersapi.p.rapidapi.com/1729/math?fragment=true&json=true";
  const factOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fbeb36f02dmshc031c9db38cab60p1d5940jsn432ffc6c97c4',
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
    },
  };
  const randomMathFact= fetch(url, options)
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
app.listen(4000, () => {
  console.log(`Listening on local host 4000`);
});
