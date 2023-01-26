const mongoose = require("mongoose");
const Station = require("../Models/Station.model");

//Get a list of all stations - paginated 5
module.exports = {
  getAllStations: async (req, res, next) => {
    try {
      const { page = 1, limit = 5 } = req.query;
      const result = await Station.find({})
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.json({ page, total: result.length, result });
    } catch (error) {
      console.log(error.message);
    }
  },

  //Get single station by name
  findStationByName: async (req, res, next) => {
    try {
      const stationName = req.params["name"];
      const result = await Station.findOne({ Name: stationName });
      res.json({ status: "success", data: result });
    } catch (error) {
      console.log(error.message);
    }
  },
};
