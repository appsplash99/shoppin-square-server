const router = require('express').Router()
const {
  getOneProduct,
  addNewProduct,
  getPaginatedProducts,
  populateProductsInMyDb,
} = require('../controllers/products.controller')
const { findProductById } = require('../middlewares/routerParam.middleware')

router.param('productId', findProductById)

router
  .get('/', getPaginatedProducts)
  .get('/:productId', getOneProduct)
  .post('/', addNewProduct)
  .post('/post-products', populateProductsInMyDb)

module.exports = router
