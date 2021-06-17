const router = require('express').Router()
const {
  getProducts,
  getProduct,
  addNewProduct,
} = require('../controllers/products.controller')
const { findProductById } = require('../controllers/routerParam.controller')

router.param('productId', findProductById)

router
  /** url route - BASE_URL/api/products */
  .get('/', getProducts)
  .get('/:productId', getProduct)
  .post('/', addNewProduct)

module.exports = router
