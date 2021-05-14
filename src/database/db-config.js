const mysql = require('mysql2/promise')
require('dotenv/config')

const database = {host: 'remotemysql.com',
        user: 'HCzqH6c6AM',
        password: 'agKX8a5sa5',
        database: 'HCzqH6c6AM'}

async function connect(){

    if(global.connection && global.connection.state !== 'disconnected') return global.connection

    const connection = mysql.createPool (database)
    
    console.log('connection ready!')
    global.connection = connection

    return connection
}

connect()



module.exports = {connect}
