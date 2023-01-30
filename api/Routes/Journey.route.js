const express = require("express");
const JourneyRouter = express.Router();
const JourneyController = require("../Controllers/Journey.controller");

// Routes after HOST/api/journeys
JourneyRouter.get("/", JourneyController.getAllJourneys);

module.exports = JourneyRouter;
