const router = require('express').Router()
const tickecontroller = require('../controllers/ticket.controller')


router.post('/create' , tickecontroller.createTicket)




module.exports = router