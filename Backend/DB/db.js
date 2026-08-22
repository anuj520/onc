const mongoose = require('mongoose')

// यह लंबा फॉर्मेट आपके इंटरनेट की ब्लॉकिंग को बाईपास कर देगा
// ध्यान दें: <db_password> की जगह अपना असली पासवर्ड डालना मत भूलना
const uri = "mongodb://127.0.0.1:27017/PC_Games"

const connection = async () => {
    console.log("Database connect...");
    try {
        await mongoose.connect(uri);
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.log("Connection Failed: ", error);
    }
}

module.exports = connection;