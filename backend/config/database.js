const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path : "/Users/kapil/Documents/Ecommerce/backend/config/.env"});

const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log("Mongoose connected");
        }).catch((err) => console.log(err));
}

module.exports = connectDatabase;