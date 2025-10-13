const express = require("express");
const router = express.Router();
const {getShoppingList, createShoppingListEntry} = require("../controllers/shoppingListController");

router.route("/:userId")
    .get(getShoppingList)
    .post(createShoppingListEntry);

module.exports = router;