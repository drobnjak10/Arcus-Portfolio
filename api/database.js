const mysql = require('mysql')


const DBConnect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

DBConnect.connect(err => {
    if(err) {
        console.log('err', err)
    }
    console.log('MYSQL Connected Success')
})

module.exports = DBConnect