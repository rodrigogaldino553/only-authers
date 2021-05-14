const db = require('../../database/db-interactions')
const bcrypt = require('bcryptjs')
const jwt = require('./jwt')




module.exports = {
    async registerUser(req, res) {
        const { name, email, password } = req.body

        const userData = [name, email, password]

        try {
            //toda a interacao com o db
            try {
                const exist = await db.getUser(email)

                if (exist) {
                    return res.status(403).redirect('/register?message=Esse email já esta cadastrado!&status=403')
                }
            } catch (error) {
                console.log(error)
            }

            await db.createUser(userData)

            const user = await db.getUser(email)
            
            const token = jwt.generateToken({ id: user.id })
            return res.cookie("Bearer ", token,{
                httpOnly: true,
                sameSite: "strict"
            }).redirect('/apirw/home?message=Dados salvos com sucesso!&status=200')
        } catch (error) {
            console.log(error)
            return res.status(403).redirect('/?message=ERRO! Não foi possível salvar dados no banco de dados!&status=500')
        }

    },

    async login(req, res) {
        

        try {
            let isMatch = false
            let user = null
            try {
                const { email, password } = req.body
                    
                user = await db.getUser(email)

                isMatch = bcrypt.compareSync(password, user.password)

            } catch (error) {
                console.log(error)
                return res.redirect('/error?status=503&message=ERRO! Não foi possível acessar banco de dados')
    
            }
            
            if (isMatch) {
                //here go the code to generate the jwt code and put it on the response
                const token = jwt.generateToken({ id: user.id })
                //console.log(token)
                return res.cookie("Bearer ", token,{
                    httpOnly: true,
                    sameSite: "strict"
                }).redirect('/apirw/home?message=Bem-Vindo&status=200')
                //return res.status(200).json({ message: 'User authenticated, ', token: token })
            } else {
                return res.redirect('/login?message=Usuário ou senha incorretos!&status=403')
            }

        }catch(error){
            console.log(error)
            return res.redirect('/error?status=503&message=ERRO! Não foi possível acessar banco de dados')
 
        }
    }
} // => app.use('/auth', router)





