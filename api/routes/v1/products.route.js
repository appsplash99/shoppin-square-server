const express = require('express')
const {
  getProducts,
  addNewProduct,
  findProductById,
} = require('../../controllers/products.controller');
const router = express.Router();

router
  // /api/v1/products/
  .get("/", getProducts)
  // /api/v1/products/productId
  .get("/:productId", findProductById)
  // /api/v1/products/
  .post("/", addNewProduct)

module.exports = router