const router = require('express').Router();
const {
  getProducts,
  addNewProduct,
  findProductById,
} = require('../../controllers/products.controller');

router
  /** url route - BASE_URL/api/products */
  .get('/', getProducts)
  .get('/:productId', findProductById)
  .post('/', addNewProduct);

module.exports = router;
