import express from "express";
import {getShoppingList, createShoppingListEntry, deleteShoppingListEntry} from "../controllers/shoppingListController.js";

const router = express.Router();
router.route("/:userId")
    .get(getShoppingList)
    .post(createShoppingListEntry)

router.route("/:listId")
    .delete(deleteShoppingListEntry);

export default router;