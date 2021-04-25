const express = require('express')
const authMiddleware = require('../middleware/auth')

const router = express.Router()


router.use(authMiddleware)

router.get('/', (req, res) => {
    res.send('Hello World!', req.userId)
})

router.get('/books', (req, res) => {
    res.send('Amor e odio, 1994, Desinformacao')
})


module.exports = app => app.use('/projects', router)



