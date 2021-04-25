const userController = require('../app/controllers/UserController')
const authController = require('../app/controllers/AuthController')


const routes = (server) => {

    server.route('/register')
        .post((req, res) => {authController.registerUser(req, res)})

    server.route('/getUsers')
        .get((req, res) => {userController.getAllUsers(req, res)})

        .post((req, res) => {userController.getUser(req, res)})

    server.route('/login')
        .post((req, res) => {authController.login(req, res)})

}


module.exports = routes

