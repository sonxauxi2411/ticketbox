const router = require('express').Router()
const categoryController = require('../controllers/category.controller')


router.post('/create' , categoryController.createCategory)



module.exports = router