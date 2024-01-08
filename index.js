const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mongoose = require("mongoose");
const multer = require('multer');
require("dotenv").config();
require("colors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


app.use(cors());
app.use(express.json());
app.use("/pdfFiles", express.static("pdfFiles"));


const classRoute = require('./routes/class.route');
const userInfo = require('./routes/userInfo.route');
const assignment = require('./routes/assignment.route');
const chatInfo = require('./routes/chat.route');


app.use('/api/v1/classList', classRoute);
app.use('/api/v1/userInfo', userInfo);
app.use('/api/v1/assignment', assignment);
app.use('/api/v1/chatInfo', chatInfo);

// Multer code start...
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './pdfFiles')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
});

const upload = multer({ storage: storage });

app.post("/upload-file", upload.single("file"), async (req, res) => {
    try {
        const filePath = req.file.filename;
        res.status(200).json({
            status: "success",
            message: "Data inserted successfully!",
            data: filePath
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: " Data is not inserted ",
            error: error.message,
        });
    }
});
// Multer code End..

// stripe code start
app.post("/create-payment-intent", async (req, res) => {
    const { price } = req.body;
    const amount = price * 100;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ['card'],
        });

        res.status(200).json({
            status: "success",
            message: "payment success",
            clientSecret: paymentIntent.client_secret
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            status: "fail",
            message: " Token in note found",
            error: error.message,
        });
    }
});




// Data Base Connection
mongoose.connect(process.env.DATABASE_URL,).then(() => {
    console.log('database connection is successful'.bgMagenta);
});

app.get("/", (req, res) => {
    res.send("Class Room Server RunIng")
});

app.listen(port, (req, res) => {
    console.log(`Class Room server${port}`.bgRed);
});

module.exports = app;

