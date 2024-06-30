const Trip = require('../models/Trip');

// Add a new trip
exports.addTrip = async (req, res) => {
  const { start, destination, startDate, endDate, modeOfTravel, activities, notes } = req.body;

  try {
    const trip = new Trip({
      userId: req.user._id,
      start,
      destination,
      startDate,
      endDate,
      modeOfTravel,
      activities,
      notes
    });

    await trip.save();
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get list of trips
exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.user._id });
    res.json(trips);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update trip details
exports.updateTrip = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const trip = await Trip.findOneAndUpdate({ _id: id, userId: req.user._id }, updates, { new: true });
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }
    res.json(trip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete trip
exports.deleteTrip = async (req, res) => {
  const { id } = req.params;

  try {
    const trip = await Trip.findOneAndDelete({ _id: id, userId: req.user._id });
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }
    res.json({ message: 'Trip deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

