const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./connection/connection.js');
const institute = require("./Router/instituteRoute.js");

//this is function call for database connection
db.connectDb();
//middleware for the express json use on server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test',(req, res) =>{
    res.send('Hello this is test from stockcode')
});

app.use("/api",institute);
app.listen(process.env.PORT || 8080,()=>{
    console.log(`server is running on port ${process.env.PORT || 8080}`)
});