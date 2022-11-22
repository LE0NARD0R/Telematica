const express = require("express");
const mysql = require("mysql");
const path =require("path");


var con = mysql.createConnection({
    host:   "localhost",
    user:   "root", 
    password: "123456789",
    database: "pagetelematica"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("conectado");
});