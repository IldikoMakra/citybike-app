"use strict";

const express = require("express");
const dotenv = require("dotenv").config();

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// DB Connection

require("./connectDB")();

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Citybike API - Ildikó Makra -  v0.1.0");
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
