const app = require("./app.js");
const path = require('path');
const express = require("express");
const dotenv = require('dotenv');
const connectDatabase = require("./config/database.js");
const cloudinary = require('cloudinary');
dotenv.config({path : "/Users/kapil/Documents/Ecommerce/backend/config/.env"});
const PORT = process.env.PORT || 4000;

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});


connectDatabase();

// deployment

__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('Server is Running!');
    });
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.listen(PORT , () => {
   console.log(`server working on http://localhost:${PORT}`);
})

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
   console.log(`Error: ${err.message}`);
   server.close(() => {
       process.exit(1);
   });
});