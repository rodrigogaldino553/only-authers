const mysql = require('mysql2/promise')
require('dotenv/config')


const host = toString(process.env.MYSQL_HOST)
const user = toString(process.env.MYSQL_USER)

const database = {host: host,//process.env.MYSQL_HOST,
        user: user, //process.env.MYSQL_USER,
        password: 'agKX8a5sa5',//process.env.MYSQL_PASSWORD,
        database: 'HCzqH6c6AM'}//process.env.MYSQL_DATABASE}
console.log(process.env.MYSQL_HOST, user)
async function connect(){

    if(global.connection && global.connection.state !== 'disconnected') return global.connection

    const connection = mysql.createPool (database)
    
    console.log('connection ready!')
    global.connection = connection

    return connection
}

connect()



module.exports = {connect}
