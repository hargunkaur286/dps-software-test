const express = require("express");
const router = express.Router();
const {getShoppingList, createShoppingListEntry, deleteShoppingListEntry} = require("../controllers/shoppingListController");

router.route("/:userId")
    .get(getShoppingList)
    .post(createShoppingListEntry)

router.route("/:listId")
    .delete(deleteShoppingListEntry);

module.exports = router;