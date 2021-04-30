const db = require('../../database/db-interactions')



module.exports = {

    async getAllUsers(req, res) {
        try {
            const users = await db.selectUsers()
            return res.status(200).send(users)
            
        } catch (error) {
            console.log(error)
            return res.redirect('/error?status=503&message=Não foi possível pegar informações do banco de dados')

        }

    },

    async getUser(req, res) {
        const { mode, value } = req.body

        try {
            console.log(mode, value)
            const user = await db.getUser(mode, value)

            if (user) {
                const userData = { id: user.id, email: user.email, name: user.name, photo: user.photo, description: user.description }
                return res.status(200).send(userData)

            } else {
                return res.status(404).json({ message: `ERROR! ${value} não encontrado!` })
            }
        } catch (error) {
            console.log(error)
            return res.redirect('/error?status=503&message=ERRO! Não foi possível pegar usuários do banco de dados')

        }

    }


}





