const express = require('express')
const {
  getCartItems,
  addNewCartItem,
  findCartItemById,
  deleteCartItemById,
  updateCartItemQtyById
} = require('../../controllers/cart.controller');
const router = express.Router();

router
  // /api/v1/cart/
  .get("/", getCartItems)
  // /api/v1/cart/cartItemId
  .get("/:cartItemId", findCartItemById)
  // /api/v1/cart/
  .post("/", addNewCartItem)
  // /api/v1/cart/cartItemId
  .delete('/:cartItemId', deleteCartItemById)
  // /api/vi/cart/cartItemId
  .patch('/:CartItemId', updateCartItemQtyById)

module.exports = router