const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mongoose = require("mongoose");
require("dotenv").config();
require("colors");


app.use(cors());
app.use(express.json());


const classRoute = require('./routes/class.route');

app.use('/api/v1/classList', classRoute);

// Data Base Connection
mongoose.connect(process.env.DATABASE_URL,).then(() => {
    console.log('database connection is successful'.bgMagenta);
});


app.get("/", (req, res) => {
    res.send("Class Room Server Runing")
});

app.listen(port, (req, res) => {
    console.log(`Class Room server${port}`.bgRed);
});

module.exports = app;

