const router = require('express').Router()
const eventController = require('../controllers/event.controller')


router.post('/create' , eventController.creatEvent)



module.exports = router