const express = require('express')
const authMiddleware = require('../middleware/auth')
const jwt = require('./jwt')

const router = express.Router()


//router.use(authMiddleware)

router.get('/', (req, res) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization
    let payload = jwt.decode(token).params
    
    res.send(`Hello World! ${payload.id}`)
})

router.get('/home', (req, res) => {
    return res.render('home.html')
})


module.exports = app => app.use('/apirw', router)



