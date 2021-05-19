const express = require('express');
const {
  getWishlistItems,
  findWishlistItemById,
  addNewWishlistItem,
  deleteWishlistItem
} = require("../../controllers/wishlist.controller");
const router = express.Router();

router
  // /api/v1/wishlist/
  .get("/", getWishlistItems)
  // /api/v1/wishlist/wishlistItemId
  .get("/:wishlistItemId", findWishlistItemById)
  // /api/v1/wishlist/
  .post("/", addNewWishlistItem)
  // 
  .delete('/:wishlistItemId', deleteWishlistItem)

module.exports = router