const router = require('express').Router()
const {
  getWishlistItems,
  getOneWishlistItem,
  addNewWishlistItem,
  deleteWishlistItem,
} = require('../controllers/wishlist.controller')
const {
  findWishlistByUserId,
  findProductById,
} = require('../middlewares/routerParam.middleware')

/** Router middleware */
router.param('userId', findWishlistByUserId)
router.param('productId', findProductById)

router
  .get('/:userId', getWishlistItems)
  .get('/:userId/:productId', getOneWishlistItem)
  .post('/:userId/:productId', addNewWishlistItem)
  .delete('/:userId/:productId', deleteWishlistItem)

module.exports = router
