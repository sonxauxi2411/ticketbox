const router = require('express').Router()
const orgController = require('../controllers/org.controller')


router.post('/create' , orgController.createOrg)



module.exports = router