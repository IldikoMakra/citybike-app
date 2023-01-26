const mongoose = require("mongoose");
const Journey = require("../Models/Journey.model");

//Get a list of journeys - paginated by 5
module.exports = {
  getAllJourneys: async (req, res, next) => {
    try {
      const { page = 1, limit = 5 } = req.query;
      const result = await Journey.find({})
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.json({ page, total: result.length, result });
    } catch (error) {
      console.log(error.message);
    }
  },
};
