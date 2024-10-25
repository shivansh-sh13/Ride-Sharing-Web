const mongoose = require('mongoose');

const rideSchema = mongoose.Schema({
  traveler: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  driverName: { type: String, required: true },
  driverPhone: { type: String, required: true },
  cabNumber: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  completedAt: { type: Date },
  auditTrail: [{
    timestamp: { type: Date, default: Date.now },
    status: { type: String, enum: ['created', 'in-progress', 'completed'] },
  }],
}, {
  timestamps: true,
});

const Ride = mongoose.model('Ride', rideSchema);
module.exports = Ride;
