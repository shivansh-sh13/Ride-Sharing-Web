const asyncHandler = require('express-async-handler');
const Ride = require('../models/Ride');

// @desc Track ride of a traveler
// @route GET /api/companions/track/:id
// @access Private (Companion)
const trackRide = asyncHandler(async (req, res) => {
  const ride = await Ride.findById(req.params.id).populate('traveler', 'name');

  if (ride) {
    res.json({
      driverName: ride.driverName,
      driverPhone: ride.driverPhone,
      cabNumber: ride.cabNumber,
      traveler: ride.traveler.name,
      status: ride.isActive ? 'In Progress' : 'Completed',
      auditTrail: ride.auditTrail,
    });
  } else {
    res.status(404);
    throw new Error('Ride not found');
  }
});

// @desc Provide feedback for a ride
// @route POST /api/companions/feedback
// @access Private (Companion)
const provideFeedback = asyncHandler(async (req, res) => {
  const { rideId, feedbackText, rating } = req.body;
  
  const feedback = await Feedback.create({
    ride: rideId,
    companion: req.user._id,
    feedbackText,
    rating,
  });

  if (feedback) {
    res.status(201).json(feedback);
  } else {
    res.status(400);
    throw new Error('Invalid feedback data');
  }
});

module.exports = { trackRide, provideFeedback };
