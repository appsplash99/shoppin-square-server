const router = require('express').Router();
const {
  getWishlistItems,
  findWishlistItemById,
  addNewWishlistItem,
  deleteWishlistItem,
} = require('../../controllers/wishlist.controller');

router
  // /api/v1/wishlist/
  .get('/', getWishlistItems)
  // /api/v1/wishlist/wishlistItemId
  .get('/:wishlistItemId', findWishlistItemById)
  // /api/v1/wishlist/
  .post('/', addNewWishlistItem)
  // /api/v1/wishlist/
  .delete('/:wishlistItemId', deleteWishlistItem);

module.exports = router;
