const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const product = require('./routes/product')
const addToCart = require('./routes/addToCart')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/sim/product', product)
app.use('/sim/cart', addToCart)

const port = 5000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})