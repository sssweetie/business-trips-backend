const { CityModel } = require('../models/city');

const CityController = {
  // Read all cities
  read: async (req, res) => {
    try {
      const cities = await CityModel.find();
      res.status(200).json(cities);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cities', details: error });
    }
  },
};

module.exports = { CityController };
