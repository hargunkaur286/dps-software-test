import express from "express";
import {getUsers, createUser, getUser, getUserByName, deleteUser} from "../controllers/userController.js";

const router = express.Router();
router.route("/")
    .get(getUsers)
    .post(createUser);

router.route("/username/:username")
    .get(getUserByName);

router.route("/:userId")
    .get(getUser)
    .delete(deleteUser);

export default router;