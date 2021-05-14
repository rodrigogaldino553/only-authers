const mysql = require('mysql2/promise')
require('dotenv/config')

const database = {host: 'remotemysql.com',//process.env.MYSQL_HOST,
        user: 'HCzqH6c6AM', //process.env.MYSQL_USER,
        password: 'agKX8a5sa5',//process.env.MYSQL_PASSWORD,
        database: 'HCzqH6c6AM'//process.env.MYSQL_DATABASE}

async function connect(){

    if(global.connection && global.connection.state !== 'disconnected') return global.connection

    const connection = mysql.createPool (database)
    
    console.log('connection ready!')
    global.connection = connection

    return connection
}

connect()



module.exports = {connect}
