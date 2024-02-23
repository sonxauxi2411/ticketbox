const router = require('express').Router()
const auth = require('./auth.route')
const org = require('./org.route')
const category = require('./category.route')
const location = require('./location.route')
const enevt = require('./event.route')

router.use('/auth', auth)
router.use('/org', org)
router.use('/category', category)
router.use('/location' ,location )
router.use('/event', enevt)

module.exports = router