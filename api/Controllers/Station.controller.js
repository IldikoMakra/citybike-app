const mongoose = require("mongoose");
const Station = require("../Models/Station.model");
const Journey = require("../Models/Journey.model");

//Get a list of all stations - paginated by 10
module.exports = {
  getAllStations: async (req, res, next) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const result = await Station.find({})
        .limit(limit * 1)
        .skip((page - 1) * limit);
      const display = [];
      result.map((a) => {
        let b = {};
        b.name = a.Name;
        b.id = a.ID;
        display.push(b);
      });
      res.json({
        page,
        total: result.length,
        data: display,
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  //Get single station by name
  findStationByName: async (req, res, next) => {
    try {
      const stationName = req.params["name"];
      const result = await Station.findOne({ Name: stationName });
      const departures = await Journey.find({
        departureStationName: stationName,
      });
      const returns = await Journey.find({ returnStationName: stationName });
      res.json({
        name: result.Name,
        address: result.Osoite,
        departures: departures.length,
        returns: returns.length,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};
