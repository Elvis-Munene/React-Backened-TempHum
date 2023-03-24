const mysql = require('mysql2');


// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "M@!n!90!",
//     database: "myarduinodatabase"

// })


const connection = mysql.createConnection({
    host:"sql10.freesqldatabase.com",
    user:"sql10608218",
    password:"unt1JhpIgM",
    database:"sql10608218"
})


module.exports = connection;
