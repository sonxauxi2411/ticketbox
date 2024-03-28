const router = require('express').Router()
const bookingController = require('../controllers/booking.controller')


router.post('/create', bookingController.createBooking)

router.get('/user/:userId', bookingController.getBookingByUser)

module.exports = router