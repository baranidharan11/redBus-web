const express = require('express');
const router = express.Router();
const Booking = require('../Models/Booking');

// Create a new booking
router.post('/bookings', async (req, res) => {
  const booking = new Booking(req.body);
  try {
    await booking.save();
    res.status(201).send(booking);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('bus user');
    res.send(bookings);
  } catch (error) {
    res.status(500).send();
  }
});

// Get booking by ID
router.get('/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('bus user');
    if (!booking) {
      return res.status(404).send();
    }
    res.send(booking);
  } catch (error) {
    res.status(500).send();
  }
});

// Update a booking
router.patch('/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!booking) {
      return res.status(404).send();
    }
    res.send(booking);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a booking
router.delete('/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).send();
    }
    res.send(booking);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
