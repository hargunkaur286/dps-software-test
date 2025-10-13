const mongoose = require("mongoose");

const shoppingListEntrySchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        default: "1"
    },
    bought: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    shoppingList: [shoppingListEntrySchema]
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);