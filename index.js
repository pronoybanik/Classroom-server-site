const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
require("dotenv").config();
const mongoose = require("mongoose");
require("colors");


app.use(cors());
app.use(express.json());




// Data Base Connection
mongoose.connect(process.env.DATABASE_URL,).then(() => {
    console.log('database connection is successful'.bgMagenta);
});


app.get("/", (req, res) => {
    res.send("Life Server Server RunIng")
});

app.listen(port, (req, res) => {
    console.log(`Life site server${port}`.bgRed);
});

module.exports = app;


