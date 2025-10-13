const User = require("../models/User");

const getShoppingList = async (req, res) => {
    const {userId} = req.params;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({message: "User not found."});
    }
    res.json(user.shoppingList);
}

const createShoppingListEntry = async (req, res) => {
    const {item, quantity} = req.body;
    const {userId} = req.params;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({message: "User not found."});
    }
    user.shoppingList.push({item, quantity});
    await user.save();
    const newEntry = user.shoppingList[user.shoppingList.length - 1];
    res.status(201).json(newEntry);
}

module.exports = {getShoppingList, createShoppingListEntry};