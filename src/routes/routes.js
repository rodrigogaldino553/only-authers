const userController = require('../app/controllers/UserController')
const authController = require('../app/controllers/AuthController')


const routes = (server) => {

    server.route('/register')
        .get((req, res) => {
            const query = req.query
            return res.status(200).render('landing-page.html', { status: query.status, message: query.message })
        })

        .post((req, res) => { authController.registerUser(req, res) })

    server.route('/getUsers')
        .get((req, res) => { userController.getAllUsers(req, res) })

        .post((req, res) => { userController.getUser(req, res) })

    server.route('/login')
        .get((req, res) => {
            const query = req.query
            return res.status(200).render('login.html', { status: query.status, message: query.message })
        })
        
        .post((req, res) => { authController.login(req, res) })




}


module.exports = routes

