"use strict";

const express = require("express");
const dotenv = require("dotenv").config();
const PORT = 8080;
const HOST = "0.0.0.0";
const stationsRouter = require("./Routes/Station.route");

// DB Connection
require("./connectDB")();

// App
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Citybike API - Ildikó Makra -  v0.1.0");
});
app.use("/api/stations", stationsRouter);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
