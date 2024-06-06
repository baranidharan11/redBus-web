const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  busTransportProvider: { type: String, required: true },
  busName: { type: String, required: true },
  owner: { type: String, required: true },
  conductor: { type: String, required: true },
  cleaner: { type: String, required: true },
  ownerMobile: { type: String, required: true },
  conductorMobile: { type: String, required: true },
  cleanerMobile: { type: String, required: true },
  totalSeats: { type: Number, required: true },
  bookedSeats: { type: [Number], default: [] },
  departureTime: { type: String, required: true },
  arrivingTime: { type: String, required: true },
  fromCity: { type: String, required: true },
  toCity: { type: String, required: true },
});

module.exports = mongoose.model("Bus", busSchema);
