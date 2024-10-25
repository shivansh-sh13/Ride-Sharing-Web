const express = require('express');
const { createRide, updateRideStatus } = require('../controllers/rideController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Route to create a new ride
router.post('/', protect, createRide);

// Route to update ride status
router.put('/:id', protect, updateRideStatus);

module.exports = router;
