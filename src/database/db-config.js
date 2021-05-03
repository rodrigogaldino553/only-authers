const mysql = require('mysql2/promise')


async function connect(){

    if(global.connection && global.connection.state !== 'disconnected') return global.connection

    const connection = mysql.createPool ({
        host: 'remotemysql.com',
        user: 'HCzqH6c6AM',
        password: 'agKX8a5sa5',
        database: 'HCzqH6c6AM'
    })

    console.log('connection ready!')
    global.connection = connection

    return connection
}

connect()



module.exports = {connect}