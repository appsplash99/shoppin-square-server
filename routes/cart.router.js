const router = require('express').Router()
const {
  getCartItems,
  getOneCartItem,
  addNewCartItem,
  deleteCartItemById,
  updateCartItemQtyById,
} = require('../controllers/cart.controller')
const {
  findUserById,
  findProductById,
  findCartByUserId,
} = require('../controllers/routerParam.controller')

router.param('userId', findUserById)
router.param('productId', findProductById)
router.param('userId', findCartByUserId)

router
  /** url route - BASE_URL/api/cart/:userId */

  // CREATE
  .post('/:userId/:productId', addNewCartItem)

  // READ
  .get('/:userId', getCartItems)

  // get Single Cart
  .get('/:userId/:productId', getOneCartItem)

  // UPDATE
  .patch('/:userId/:productId', updateCartItemQtyById)

  // DELETE
  .delete('/:userId/:productId', deleteCartItemById)

module.exports = router
