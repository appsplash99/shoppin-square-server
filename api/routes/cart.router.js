const router = require('express').Router();
const {
  getCartItems,
  addNewCartItem,
  findCartItemById,
  deleteCartItemById,
  updateCartItemQtyById,
} = require('../../controllers/cart.controller');


router
  /** url route - BASE_URL/api/cart */
  .get('/', getCartItems)
  .post('/', addNewCartItem)
  .get('/:cartItemId', findCartItemById)

  .delete('/:cartItemId', deleteCartItemById)
  .patch('/:CartItemId', updateCartItemQtyById);

module.exports = router;