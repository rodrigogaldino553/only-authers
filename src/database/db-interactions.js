const db = require('./db-config')
const bcrypt = require('bcryptjs')


const interactions = {

    async createUser(user) {
        const connection = await db.connect()
        const hash = bcrypt.hashSync(user[2])
        user[2] = hash
        const sql = 'INSERT INTO users(name, email, password) VALUES(?, ?, ?);'

        await connection.query(sql, user)

    },

    async selectUsers() {
        const connection = await db.connect()
        const sql = 'SELECT id, email, name FROM users;'

        const [rows] = await connection.query(sql)
        return rows
    },

    async getUser(mode, value) {
        const connection = await db.connect()
        const sql = `SELECT * FROM users WHERE ${mode}="${value}";`
        const values = [mode, value]
        try {
            const [rows] = await connection.query(sql)
            return rows[0]
        } catch (error) {
            console.log(error)
        }

    }


}



module.exports = interactions

