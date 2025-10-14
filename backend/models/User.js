const mongoose = require("mongoose");
const z = require("zod");

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

const shoppingListEntryValidator = z.object({
    item: z.string().min(1, "Item name is required"),
    quantity: z.string().default("1"),
    bought: z.boolean().default(false)
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
    shoppingList: {
        type: [shoppingListEntrySchema],
        default: []
    }
}, {
    timestamps: true
});

const userValidator = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    email: z.string().email("Invalid email address"),
    shoppingList: z.array(shoppingListEntrySchema).default([])
});

const User = mongoose.model("User", userSchema);
const ShoppingListEntry = mongoose.model("ShoppingListEntry", shoppingListEntrySchema);
module.exports = {User, ShoppingListEntry, shoppingListEntryValidator, userValidator};