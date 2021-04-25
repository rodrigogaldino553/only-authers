const express = require('express')
const server = express()
const parser = require('body-parser')
const userRoutes = require('./routes/routes')

const PORT = process.env.PORT || '8080'


server.use(parser.json())
server.use(parser.urlencoded({ extended: false }))

userRoutes(server)
require('./app/controllers/ProjectController')(server)
server.get('/', (req, res) => {
    return res.status(200).json({ message: 'Welcome :)' })
})
server.listen(PORT, () => { console.log(`working on ${PORT}`) })


