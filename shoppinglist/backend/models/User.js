import mongoose from "mongoose";
import z from "zod";

const shoppingListEntrySchema = new mongoose.Schema({
  item: { type: String, required: true },
  bought: { type: Boolean, default: false },
});

export const shoppingListEntryValidator = z.object({
  item: z.string().min(1, "Item name is required"),
  bought: z.boolean().default(false),
});

const shoppingListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  entries: [shoppingListEntrySchema],
});

export const shoppingListValidator = z.object({
  name: z.string().min(1, "List name is required"),
  entries: z.array(shoppingListEntryValidator).default([]),
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  shoppingLists: [{ type: mongoose.Types.ObjectId, ref: "ShoppingList" }],
});

export const userValidator = z.object({
  username: z.string().min(3, "Username is too short").max(30, "Username is too long),
  password: z.string().min(6, "Password is too short"),
  email: z.string().email(),
  shoppingLists: z.array(objectId).default([]),
});

export const ShoppingListEntry = mongoose.model("ShoppingListEntry", shoppingListEntrySchema);
export const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);
export const User = mongoose.model("User", userSchema);