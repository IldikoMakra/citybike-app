const express = require("express");
const journeyRouter = express.Router();

const JourneyController = require("../Controllers/Journey.controller");

// Routes after HOST/api/journeys

journeyRouter.get("/", JourneyController.getAllJourneys);

module.exports = journeyRouter;
