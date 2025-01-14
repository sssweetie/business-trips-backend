const { model, Schema } = require('mongoose');

const citySchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true }, // Страна
});

const CityModel = model('cities', citySchema);

module.exports = { CityModel };
