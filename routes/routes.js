const express = require("express");
const path = require("path");

const app = express();
let publicPath = path.join(__dirname, "public");

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
