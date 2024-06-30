// backend/models/Trip.js
const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  date: Date,
  description: String
});

const TripSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  start: String,
  destination: String,
  startDate: Date,
  endDate: Date,
  modeOfTravel: String,
  activities: [ActivitySchema],
  notes: String,
  bookmarked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Trip', TripSchema);
