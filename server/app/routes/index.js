const router = require('express').Router()
const auth = require('./auth.route')
const org = require('./org.route')
const category = require('./category.route')
const location = require('./location.route')

router.use('/auth', auth)
router.use('/org', org)
router.use('/category', category)
router.use('/location' ,location )

module.exports = router