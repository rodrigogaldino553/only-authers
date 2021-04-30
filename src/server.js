const express = require('express')
const server = express()
const parser = require('body-parser')
const userRoutes = require('./routes/routes')

const PORT = process.env.PORT || '8080'


const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express:server,
    noCache:true
})

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(express.static('public'))

userRoutes(server)
require('./app/controllers/ProjectController')(server)
server.get('/', async(req, res) => {
    return res.redirect('/register')
})

server.get('/error', async(req, res) => {
    const query = req.query
    return res.status(query.status).render('error.html', { status: query.status, message: query.message })

})

server.use((req, res, next) => {return res.redirect('/error?status=404&message=Página não encontrada')})

server.listen(PORT, () => { console.log(`working on ${PORT}`) })


