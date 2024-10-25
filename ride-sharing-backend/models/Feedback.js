const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
  ride: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride', required: true },
  companion: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  feedbackText: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
}, {
  timestamps: true,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
