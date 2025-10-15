import mongoose from "mongoose";
import z from "zod";

export const shoppingListEntrySchema = new mongoose.Schema({
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

export const shoppingListEntryValidator = z.object({
    item: z.string().min(1, "Item name is required"),
    quantity: z.string().default("1"),
    bought: z.boolean().default(false)
});

export const userSchema = new mongoose.Schema({
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

export const userValidator = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    email: z.string().email("Invalid email address"),
    shoppingList: z.array(shoppingListEntrySchema).default([])
});

export const User = mongoose.model("User", userSchema);
export const ShoppingListEntry = mongoose.model("ShoppingListEntry", shoppingListEntrySchema);