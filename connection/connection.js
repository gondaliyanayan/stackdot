const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDb = () => {
    mongoose.connect(process.env.DbConnection,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
      },
        console.log("Database is connected")
      )
};