const mongoose = require("mongoose");
const dbURI = "mongodb://localhost:27017";
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;