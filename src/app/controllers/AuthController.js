const db = require('../../database/db-interactions')
const bcrypt = require('bcryptjs')
const jwt = require('./jwt')
const authConfig = require('../../../config/auth.json')




module.exports = {
    async registerUser(req, res) {
        const { name, email, password } = req.body

        const userData = [name, email, password]

        try {
            //toda a interacao com o db
            try {
                const exist = await db.getUser('email', email)

                if (exist) {
                    return res.status(403).redirect('/landing?message=email already exists!&status=403')
                }
            }catch(error){
                console.log(error)
            }

            await db.createUser(userData)
            
            const user = await db.getUser('email', email)
            console.log(user)
            const token = jwt.generateToken({ id: user.id })
            return res.status(200).redirect('/apirw/home?message=Dados salvos com sucesso!&status=200&token='+token)
        } catch (error) {
            console.log(error)
            return res.status(403).redirect('/?message=ERRO! Não foi possível salvar dados no banco de dados!&status=500')
        }

    },

    async login(req, res) {
        const { email, password } = req.body

        try {
            const user = await db.getUser('email', email)

            const isMatch = bcrypt.compareSync(password, user.password)

            if (isMatch) {
                //here go the code to generate the jwt code and put it on the response
                const token = jwt.generateToken({ id: user.id })
                console.log(token)
                return res.status(200).json({ message: 'User authenticated, ', token: token })
            } else {
                return res.status(404).json({ message: 'ERROR! password or user is wrong!' })
            }
        } catch (error) {
            console.log(error)
            return res.redirect('/error?status=503&message=ERRO! Não foi possível acessar banco de dados')

        }
    }
} // => app.use('/auth', router)





