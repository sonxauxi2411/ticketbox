const router = require('express').Router()
const orgController = require('../controllers/org.controller')


router.post('/create' , orgController.createOrg)
router.get('/all' , orgController.getAllOrg)
router.post('/delete' , orgController.deleteOrg)



module.exports = router