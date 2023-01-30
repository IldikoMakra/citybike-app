const express = require("express");
const StationRouter = express.Router();

const StationController = require("../Controllers/Station.controller");

// Routes after HOST/api/stations

StationRouter.get("/", StationController.getAllStations);
StationRouter.get("/:name", StationController.findStationByName);

module.exports = StationRouter;
