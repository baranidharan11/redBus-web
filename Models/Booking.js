const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus' },
  seatNumber: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'booked' },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
