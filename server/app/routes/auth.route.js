const router = require('express').Router()
const authRoute = require('../controllers/auth.controller')


router.post('/register',authRoute.register)
router.post('/login', authRoute.login)
router.post('/update-profile', authRoute.updateProfile)


module.exports = router