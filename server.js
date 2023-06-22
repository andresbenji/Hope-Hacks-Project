const express = require("express");
const app = express();
const port = 6969;
const axios = require("axios");
const url =
  "https://numbersapi.p.rapidapi.com/4/trivia?fragment=true&notfound=floor&json=true";

const getTrivia = app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from the API." });
  }
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
