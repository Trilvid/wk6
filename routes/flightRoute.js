const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
.route('/')
.get(controller.example);

router
.route('/api/flight')
.get(controller.getAllFlights)
.post(controller.bookFlights);

router
.route('/api/flight/:id')
.get(controller.getAFlight)
.patch(controller.changeFlight)
.delete(controller.cancelFlight);

// router
// .route('/:id');


module.exports = router;

