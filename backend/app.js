const express = require("express");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const product = require("./routes/productRoute.js");
const user = require("./routes/userRoute");
const cookieParser = require('cookie-parser');
const errorMiddleware = require("./middlewares/error.js");
const order = require('./routes/orderRoute');
const payment = require('./routes/paymentRoute');
const cors = require("cors");
const path = require('path');
// config

require('dotenv').config({ path: '/Users/kapil/Documents/Ecommerce/backend/config/.env' });

const app = express();
app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/v1" , product);
app.use("/api/v1", user)
app.use('/api/v1', order);
app.use('/api/v1', payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
