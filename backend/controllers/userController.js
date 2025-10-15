import {User, userValidator} from "../models/User.js";
import z from "zod";

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

export const getUser = async (req, res) => {
    const {userId} = req.params;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({message: "User not found."});
    }
    res.json(user);
}

export const createUser = async (req, res) => {
    try {
        const userData = userValidator.parse(req.body);
        const user = new User(userData);
        await user.save();
        res.status(201).json(user);
    }
    catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({ errors: err.message });
        }
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteUser = async (req, res) => {
    const {userId} = req.params;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
        return res.status(404).json({message: "User not found."});
    }
    res.json(user);
}