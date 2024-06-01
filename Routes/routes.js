const express = require('express');
const router = express.Router();
const Route = require('../Models/Route');

router.post('/routes', async (req, res) => {
  const route = new Route(req.body);
  try {
    await route.save();
    res.status(201).send(route);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/routes', async (req, res) => {
  try {
    const routes = await Route.find();
    res.send(routes);
  } catch (error) {
    res.status(500).send();
  }
});

router.patch('/routes/:id', async (req, res) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!route) {
      return res.status(404).send();
    }
    res.send(route);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.delete('/routes/:id', async (req, res) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);
    if (!route) {
      return res.status(404).send();
    }
    res.send(route);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
