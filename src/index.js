const express = require("express");
const app = express();
const mysql = require("mysql");
const path =require("path");


const con = mysql.createConnection({
    host:   "localhost",
    user:   "root", 
    password: "123456789",
    database: "pagetelematica"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("conectado");
});

//settings
app.set('port', process.env.PORT || 9500)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('server on port 9500')
});