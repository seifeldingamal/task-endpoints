const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.get('/:pid', productController.product)

module.exports = router