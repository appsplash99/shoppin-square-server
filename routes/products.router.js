const router = require('express').Router()
const {
  getProducts,
  getOneProduct,
  addNewProduct,
} = require('../controllers/products.controller')
const { findProductById } = require('../middlewares/routerParam.middleware')

router.param('productId', findProductById)

router
  .get('/', getProducts)
  .get('/:productId', getOneProduct)
  .post('/', addNewProduct)

module.exports = router
