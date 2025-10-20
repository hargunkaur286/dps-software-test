import {User, ShoppingListEntry, shoppingListEntryValidator} from "../models/User.js";
import z from "zod";

export const getShoppingList = async (req, res) => {
    const {userId} = req.params;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({message: "User not found."});
    }
    res.json(user.shoppingList);
}

export const createShoppingListEntry = async (req, res) => {
    try {
        const entryData = shoppingListEntryValidator.parse(req.body);
        const {userId} = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({message: "User not found."});
        }
        user.shoppingList.push(entryData);
        await user.save();
        const newEntry = user.shoppingList[user.shoppingList.length - 1];
        res.status(201).json(newEntry);
    }
    catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({ errors: err.message });
        }
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteShoppingListEntry = async (req, res) => {
    const {userId, listId} = req.params;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({message: "Entry not found."});
    }
    const listEntry = user.shoppingList.id(listId);
    if (!listEntry) {
        return res.status(404).json({message: "Entry not found."});
    }
    listEntry.remove();
    await user.save();
    res.json(listEntry);
}