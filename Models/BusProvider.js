const mongoose = require('mongoose');

const busProviderSchema = new mongoose.Schema({
  name: String,
  contact: String,
});

const BusProvider = mongoose.model('BusProvider', busProviderSchema);
module.exports = BusProvider;
