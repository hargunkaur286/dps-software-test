import express from "express";
import {getUsers, createUser, getUser, deleteUser} from "../controllers/userController.js";

const router = express.Router();
router.route("/")
    .get(getUsers)
    .post(createUser);

router.route("/:userId")
    .get(getUser)
    .delete(deleteUser);

export default router;