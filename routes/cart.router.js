const router = require('express').Router()
const {
  getCartItems,
  getOneCartItem,
  addNewCartItem,
  deleteCartItem,
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
  .post('/:userId/:productId', addNewCartItem)
  .get('/:userId', getCartItems)
  .get('/:userId/:productId', getOneCartItem)
  .patch('/:userId/:productId', updateCartItemQtyById)
  .delete('/:userId/:productId', deleteCartItem)

module.exports = router
