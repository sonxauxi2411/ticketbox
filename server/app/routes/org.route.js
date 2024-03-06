const router = require('express').Router()
const orgController = require('../controllers/org.controller')
const {verifyTokenAndAdmin} = require('../middlewares/verifyToken')

router.post('/create' ,  orgController.createOrg)
router.get('/all' , verifyTokenAndAdmin, orgController.getAllOrg)
router.post('/delete' , orgController.deleteOrg)



module.exports = router