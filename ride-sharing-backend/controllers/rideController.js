const asyncHandler = require('express-async-handler');
const Ride = require('../models/Ride');

// @desc Create a new ride
// @route POST /api/rides
// @access Private (Traveler)
const createRide = asyncHandler(async (req, res) => {
  const { driverName, driverPhone, cabNumber } = req.body;
  const ride = await Ride.create({
    traveler: req.user._id,
    driverName,
    driverPhone,
    cabNumber,
  });

  if (ride) {
    res.status(201).json(ride);
  } else {
    res.status(400);
    throw new Error('Invalid ride data');
  }
});

// @desc Update ride status
// @route PUT /api/rides/:id
// @access Private (Traveler)
const updateRideStatus = asyncHandler(async (req, res) => {
  const ride = await Ride.findById(req.params.id);

  if (ride) {
    ride.isActive = false;
    ride.completedAt = Date.now();
    ride.auditTrail.push({ status: 'completed' });
    await ride.save();
    res.json(ride);
  } else {
    res.status(404);
    throw new Error('Ride not found');
  }
});

module.exports = { createRide, updateRideStatus };
