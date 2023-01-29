const mongoose = require("mongoose");

const JourneySchema = new mongoose.Schema({
  departure: {
    type: String,
    required: true,
  },
  return: {
    type: String,
    required: true,
  },
  departureStationId: {
    type: Number,
    required: true,
  },
  departureStationName: {
    type: String,
    required: true,
  },
  returnStationId: {
    type: Number,
    required: true,
  },
  returnStationName: {
    type: String,
    required: true,
  },
  distanceMeters: {
    type: Number,
    required: true,
  },
  durationSeconds: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Journey", JourneySchema);
