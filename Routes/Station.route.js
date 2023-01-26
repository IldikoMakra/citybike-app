const express = require("express");
const stationRouter = express.Router();

const StationController = require("../Controllers/Station.controller");

// Routes after HOST/api/stations

stationRouter.get("/", StationController.getAllStations);
stationRouter.get("/:name", StationController.findStationByName);

module.exports = stationRouter;
