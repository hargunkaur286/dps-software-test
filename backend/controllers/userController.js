const User = require("../models/User");

const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

const getUser = async (req, res) => {
    const {userId} = req.params;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({message: "User not found."});
    }
    res.json(user);
}

const createUser = async (req, res) => {
    const {username, password, email} = req.body;
    const user = new User({username, password, email});
    await user.save();
    res.status(201).json(user);
}

module.exports = {getUsers, getUser, createUser};