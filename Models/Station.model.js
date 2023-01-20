const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StationSchema = new Schema({
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

const Station = mongoose.model("product", StationSchema);
module.exports = Station;
