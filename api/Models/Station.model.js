const mongoose = require("mongoose");

const StationSchema = new mongoose.Schema({
  FID: {
    type: String,
    required: true,
  },
  ID: {
    type: Number,
    required: true,
  },
  Nimi: {
    type: String,
    required: true,
  },
  Namn: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Osoite: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Kaupunki: {
    type: String,
    required: true,
  },
  Stad: {
    type: String,
    required: true,
  },
  Operaattor: {
    type: String,
    required: true,
  },
  Kapasiteet: {
    type: Number,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Station", StationSchema);