const mysql = require('mysql2/promise')
require('dotenv/config')


const host = process.env.MYSQL_HOST
const user = process.env.MYSQL_USER
const password = process.env.MYSQL_PASSWORD
const database = process.env.MYSQL_DATABASE

const database = {host: host,//process.env.MYSQL_HOST,
        user: user, //process.env.MYSQL_USER,
        password: password,//process.env.MYSQL_PASSWORD,
        database: database}//process.env.MYSQL_DATABASE}
console.log(host, user, password, database)
async function connect(){

    if(global.connection && global.connection.state !== 'disconnected') return global.connection

    const connection = mysql.createPool (database)
    
    console.log('connection ready!')
    global.connection = connection

    return connection
}

connect()



module.exports = {connect}
