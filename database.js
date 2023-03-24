const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "M@!n!90!",
    database: "myarduinodatabase"

})

module.exports = connection;
