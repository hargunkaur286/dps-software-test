import mongoose from "mongoose";
const dbURI = "mongodb://127.0.0.1:27017/buddy";
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

export default connectDB;