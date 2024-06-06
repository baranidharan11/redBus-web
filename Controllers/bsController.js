const Bus = require("../models/Bus");

// Controller functions
exports.createBus = async (req, res) => {
  try {
    const newBus = new Bus(req.body);
    await newBus.save();
    res.status(201).json(newBus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    res.status(200).json(bus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBus = async (req, res) => {
  try {
    const updatedBus = await Bus.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    res.status(200).json(updatedBus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBus = async (req, res) => {
  try {
    const deletedBus = await Bus.findByIdAndDelete(req.params.id);
    if (!deletedBus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    res.status(200).json({ message: "Bus deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCitiesByState = async (req, res) => {
  try {
    // Implement logic to get cities based on the state
    const state = req.params.state;
    const cities = []; // Dummy data, replace with actual logic
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
