const mongoose = require("mongoose");
const Journey = require("../Models/Journey.model");

//Get a list of journeys - paginated by 10
module.exports = {
  getAllJourneys: async (req, res, next) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      let result = await Journey.find({})
        .limit(limit * 1)
        .skip((page - 1) * limit);

      const display = [];
      result.map((a) => {
        let b = {};
        b.started = a.departureStationName;
        b.ended = a.returnStationName;
        b.distanceKm = (a.distanceMeters / 1000).toFixed(2);
        b.durationMin = (a.durationSeconds / 60).toFixed(2);
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
};
