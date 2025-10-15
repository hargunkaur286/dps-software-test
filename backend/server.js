import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import shoppingListRoutes from "./routes/shoppingListRoutes.js";

connectDB();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/shoppinglist", shoppingListRoutes);
app.get("/", (req, res) => {
    res.send("App started");
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

const shutdown = async () => {
    console.log("Shutting down server.");
    server.close(async () => {
        await mongoose.connection.close(false);
        process.exit(0);
    });
};

process.on("SIGINT", () => shutdown());