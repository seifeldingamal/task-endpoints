const axios = require('axios')

module.exports.product = async (req, res) => {
    const pid = req.params.pid
    await axios.get(`https://www.shopdisney.co.uk/on/demandware.store/Sites-shopDisneyEN-Site/en_GB/Product-Variation?pid=${pid}`)
    .then( ({data}) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(201).end(JSON.stringify(data, null, 2))
    })
}