const router = require('express').Router()
const tickecontroller = require('../controllers/ticket.controller')


router.post('/create' , tickecontroller.createTicket)

router.get('/all' , tickecontroller.ticketAll)

router.get('/event/:eventId', tickecontroller.getTicket)



module.exports = router