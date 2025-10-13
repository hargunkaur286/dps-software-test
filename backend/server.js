const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const shoppingListRoutes = require("./routes/shoppingListRoutes");

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