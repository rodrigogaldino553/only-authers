const express = require('express')
const authMiddleware = require('../middleware/auth')

const router = express.Router()


router.use(authMiddleware)

router.get('/', (req, res) => {
    res.send(`Hello World! ${req.userId}`)
})

router.get('/home', (req, res) => {
    res.send('You are on home')
})


module.exports = app => app.use('/authorizated', router)



