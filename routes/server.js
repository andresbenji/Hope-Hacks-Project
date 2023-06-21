const express = require("express");
const app = express();
const port = 6969;
const fs = require("fs");

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
