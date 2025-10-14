const express = require("express");
const router = express.Router();
const {getUsers, createUser, getUser, deleteUser} = require("../controllers/userController");

router.route("/")
    .get(getUsers)
    .post(createUser);

router.route("/:userId")
    .get(getUser)
    .delete(deleteUser);

module.exports = router;