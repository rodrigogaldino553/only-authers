const db = require('./db-config')
const bcrypt = require('bcryptjs')


const interactions = {

    async createUser(user) {
        const connection = await db.connect()
        const hash = bcrypt.hashSync(user[2])
        user[2] = hash
        const sql = 'INSERT INTO users(name, email, password, photo, description) VALUES(?, ?, ?, ?, ?);'

        await connection.query(sql, user)

    },

    async selectUsers() {
        const connection = await db.connect()
        const sql = 'SELECT id, email, name, photo, description FROM users;'

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

    /*async login(email, password) {
        const connection = await db.connect()

        const [dbPass] = await connection.query('SELECT password FROM users WHERE email = ?', email)


        const hash = dbPass[0].password
        console.log(password, hash)

        await bcrypt.compare(password, hash).then(async (resp) => {
            console.log(resp)
            if (resp) {
                const sql = 'SELECT id, name, email, photo, description FROM users WHERE email= ?;'

                const [userData] = await connection.query(sql, email)

                console.log(userData)

                return userData
            } else {
                return false
            }
        })

    }*/


}



module.exports = interactions

