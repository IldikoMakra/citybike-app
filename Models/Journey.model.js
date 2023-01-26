const mongoose = require("mongoose");

const JourneySchema = new mongoose.Schema({
  Departure: {
    type: String,
    required: true,
  },
  Return: {
    type: String,
    required: true,
  },
  DepartureStationId: {
    type: Number,
    required: true,
  },
  DepartureStationName: {
    type: String,
    required: true,
  },
  ReturnStationId: {
    type: Number,
    required: true,
  },
  ReturnStationName: {
    type: String,
    required: true,
  },
  CoveredDistanceMeters: {
    type: Number,
    required: true,
  },
  DurationSeconds: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Journey", JourneySchema);
