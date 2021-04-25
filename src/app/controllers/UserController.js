const db = require('../../database/db-interactions')



module.exports = {

    async getAllUsers(req, res) {
        try {
            const users = await db.selectUsers()
            return res.status(200).send(users)

        } catch (error) {
            console.log(error)
            return res.status(403).json({ message: 'ERROR! Was not possible get users from database!' })
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
                return res.status(404).json({ message: `ERROR! ${value} not found!` })
            }
        } catch (error) {
            console.log(error)
            return res.status(503).json({ message: 'ERROR! Was not possible get user' })
        }

    },

    


}





