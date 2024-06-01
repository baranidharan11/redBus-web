const mongoose = require('mongoose');
const { Schema } = mongoose;

const seatSchema = new Schema({
  number: { type: Number, required: true },
  isBooked: { type: Boolean, required: true }
});

const pointSchema = new Schema({
  location: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true }
});

const busSchema = new Schema({
  busNumber: { type: String, required: true },
  provider: { type: Schema.Types.ObjectId, ref: 'Provider', required: true },
  route: { type: Schema.Types.ObjectId, ref: 'Route', required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  boardingPoints: [pointSchema],
  droppingPoints: [pointSchema],
  seats: [seatSchema]
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
