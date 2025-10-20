import express from "express";
import {getShoppingLists, getShoppingList, createShoppingList, createShoppingListEntry, deleteShoppingList, deleteShoppingListEntry} from "../controllers/shoppingListController.js";

const router = express.Router();
router.route("/:userId")
  .get(getShoppingLists)
  .post(createShoppingList)

router.route("/:listId")
  .get(getShoppingList)
  .post(createShoppingListEntry)
  .delete(deleteShoppingList);

router.route("/:listId/:entryId")
  .delete(deleteShoppingListEntry);

export default router;