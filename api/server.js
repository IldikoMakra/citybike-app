const express = require("express");
const dotenv = require("dotenv").config();
const PORT = 8080;
const HOST = "0.0.0.0";
const StationsRouter = require("./Routes/Station.route");
const JourneysRouter = require("./Routes/Journey.route");

// DB Connection
require("./connectDB")();

// App
const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Citybike API - Ildikó Makra -  v0.1.0");
});
app.use("/api/stations", StationsRouter);
app.use("/api/journeys", JourneysRouter);

//Serve client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set environment to production"));
}

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
