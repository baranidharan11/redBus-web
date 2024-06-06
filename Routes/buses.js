const express = require("express");
const router = express.Router();
const {
  createBus,
  getAllBuses,
  getBusById,
  updateBus,
  deleteBus,
  getCitiesByState,
} = require("../Controllers/bsController");

// Routes
router.post("/", createBus);
router.get("/", getAllBuses);
router.get("/:id", getBusById);
router.put("/:id", updateBus);
router.delete("/:id", deleteBus);
router.get("/:state/cities", getCitiesByState);

module.exports = router;
