const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");




app.use(cors({
    origin:"http://localhost:3010",
    methods:"GET",
    optionsSuccessStatus: 200,
}))

app.get("/", function(req, res){
    let sql = "SELECT * FROM Bfficial_1_data";
    connection.query(sql, function(err, results){
        if (err) throw err;
    res.send(results);
    });

});




app.listen(3000, function(){
    console.log("App listening on port 3000");
    connection.connect(function(err){
        if(err) throw err;
        console.log("Database connected!");
    })
})