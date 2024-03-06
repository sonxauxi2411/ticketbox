const router = require('express').Router()
const locationController = require('../controllers/location.controller')


router.post('/create' ,locationController.createLocation)
router.get('/all' , locationController.getAllLocation)
router.post('/delete', locationController.deleteLocation)

module.exports = router