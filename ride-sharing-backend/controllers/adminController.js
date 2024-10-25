const asyncHandler = require('express-async-handler');
const Ride = require('../models/Ride');
const Feedback = require('../models/Feedback');

// @desc View all rides
// @route GET /api/admin/rides
// @access Private (Admin)
const getAllRides = asyncHandler(async (req, res) => {
  const rides = await Ride.find().populate('traveler', 'name email');

  res.json(rides);
});

// @desc Get feedback of all rides
// @route GET /api/admin/feedbacks
// @access Private (Admin)
const getFeedbacks = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find().populate('ride companion', 'name email');

  res.json(feedbacks);
});

module.exports = { getAllRides, getFeedbacks };
