const router = require('express').Router()
const eventController = require('../controllers/event.controller')


router.post('/create' , eventController.creatEvent)

router.get('/all', eventController.getAllEvent)

router.post('/delete', eventController.deleteEvent)

router.get('/:eventId' , eventController.getEvent)



module.exports = router