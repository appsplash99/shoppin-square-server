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
} = require('../middlewares/routerParam.middleware')

router.param('userId', findUserById)
router.param('productId', findProductById)
router.param('userId', findCartByUserId)

router
  .get('/:userId', getCartItems)
  .get('/:userId/:productId', getOneCartItem)
  .post('/:userId/:productId', addNewCartItem)
  .patch('/:userId/:productId', updateCartItemQtyById)
  .delete('/:userId/:productId', deleteCartItem)

module.exports = router
