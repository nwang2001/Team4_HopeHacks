const mysql = require('mysql2');
const connection = mysql.createConnection({
 host: 'localhost',
 database: 'userProfiles',
 user: 'root', 
 password: 'p@ssword',
});
connection.connect(function (err) {
 if (err) throw err;
 console.log('MySQL database is connected.');
});
module.exports = connection;