const express = require('express');
const router = express.Router();
const BusProvider = require('../models/BusProvider');


router.post('/providers', async (req, res) => {
  const provider = new BusProvider(req.body);
  try {
    await provider.save();
    res.status(201).send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.get('/providers', async (req, res) => {
  try {
    const providers = await BusProvider.find();
    res.send(providers);
  } catch (error) {
    res.status(500).send();
  }
});

// Update a provider
router.patch('/providers/:id', async (req, res) => {
  try {
    const provider = await BusProvider.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!provider) {
      return res.status(404).send();
    }
    res.send(provider);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a provider
router.delete('/providers/:id', async (req, res) => {
  try {
    const provider = await BusProvider.findByIdAndDelete(req.params.id);
    if (!provider) {
      return res.status(404).send();
    }
    res.send(provider);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
