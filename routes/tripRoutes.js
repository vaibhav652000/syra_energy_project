const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const authMiddleware = require('../middlewares/authMiddleware');
const Trip = require('../models/Trip');
router.get('/getalltrips', async (req, res) => {
  try {
    const trips = await Trip.find(); 
    res.json({trips,"msg":"ok"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/', authMiddleware, tripController.addTrip);
router.get('/gettrips', authMiddleware, tripController.getTrips);
router.put('/:id', authMiddleware, tripController.updateTrip);
router.delete('/:id', authMiddleware, tripController.deleteTrip);

module.exports = router;

