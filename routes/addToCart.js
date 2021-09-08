const express = require('express')
const addToCartController = require('../controllers/addToCartController')

const router = express.Router()

router.post('/addToCart', addToCartController.addToCart)

module.exports = router