const router = require('express').Router()
const Product = require('../models/product.model')
const {
  getOneProduct,
  addNewProduct,
  getProducts,
  getPaginatedProducts,
} = require('../controllers/products.controller')
const { findProductById } = require('../middlewares/routerParam.middleware')
const {
  paginatedResults,
} = require('../middlewares/paginatedResults.middleware')

router.param('productId', findProductById)

router
  // .get('/', getProducts)
  // .get('/', paginatedResults(Product), getPaginatedProducts)
  .get('/', getPaginatedProducts)
  .get('/:productId', getOneProduct)
  .post('/', addNewProduct)

module.exports = router
