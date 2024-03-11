const router = require('express').Router()
const eventController = require('../controllers/event.controller')


router.post('/create' , eventController.creatEvent)

router.get('/all', eventController.getAllEvent)

router.post('/delete', eventController.deleteEvent)

router.post('/update', eventController.updateEvent)

router.get('/top-events', eventController.topEvent)

router.get('/events' , eventController.getFilterEventsByCategory)

router.get('/:eventId' , eventController.getEvent)



module.exports = router