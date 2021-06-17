const router = require('express').Router();
const {
  getWishlistItems,
  findWishlistItemById,
  addNewWishlistItem,
  deleteWishlistItem,
} = require('../controllers/wishlist.controller');

router
  /** url route - BASE_URL/api/wishlist */
  .get('/', getWishlistItems)
  .get('/:wishlistItemId', findWishlistItemById)
  .post('/', addNewWishlistItem)
  .delete('/:wishlistItemId', deleteWishlistItem);

module.exports = router;
