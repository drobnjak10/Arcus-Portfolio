const mysql = require('mysql')


const DBConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'arcus-design'
})

DBConnect.connect(err => {
    if(err) {
        console.log('err', err)
    }
    console.log('MYSQL Connected Success')
})

module.exports = DBConnect