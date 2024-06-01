const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');

// Create a new bus
router.post('/addBuses', async (req, res) => {
  const bus = new Bus(req.body);
  try {
    await bus.save();
    res.status(201).send(bus);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all buses
router.get('/buses', async (req, res) => {
  try {
    const buses = await Bus.find().populate('provider route');
    res.send(buses);
  } catch (error) {
    res.status(500).send();
    console.log('error', error)
  }
});

// Update a bus
router.patch('/buses/:id', async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!bus) {
      return res.status(404).send();
    }
    res.send(bus);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a bus
router.delete('/buses/:id', async (req, res) => {
  try {
    const bus = await Bus.findByIdAndDelete(req.params.id);
    if (!bus) {
      return res.status(404).send();
    }
    res.send(bus);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
