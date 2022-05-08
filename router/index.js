const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log(req)
    res.send('ok')
})

router.get('/get', (req, res, next) => {
    const query = req.query
    console.log(query)
    res.send('ok')
})

router.post('/send', (req, res, next) => {
    const data = req.body
    console.log(data)
    res.send('ok')
})

module.exports = router