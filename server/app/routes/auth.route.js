const router = require('express').Router()
const authRoute = require('../controllers/auth.controller')


router.post('/register',authRoute.register)


module.exports = router