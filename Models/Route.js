const mongoose = require('mongoose');

const stoppingSchema = new mongoose.Schema({
  locationName: String,
  latitude: Number,
  longitude: Number,
});

const routeSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  stoppings: [stoppingSchema],
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;
