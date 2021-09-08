const cart = require('../fakeDB/Cart').cart

module.exports.addToCart = (req, res) => {
    const { pid, quantity } = req.body
    const check = req.body

    if (Object.keys(check).length >= 2) {
        if (cart.length > 0) {
            cart.findIndex( item => item.pid === pid) === -1 
            ? 
            cart.push({
                pid,
                quantity
            })
            :
            cart[cart.findIndex( item => 
                item.pid === pid
            )]
            .quantity += quantity
        } else {
            cart.push({
                pid,
                quantity
            })
        }
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(cart, null, 2))
        res.status(201).send()
    } else {
        res.setHeader('Content-Type', 'application/json')
        res.status(406).end(JSON.stringify({
            error: "Data sent is not enough"
        }, null, 2))
    }
}