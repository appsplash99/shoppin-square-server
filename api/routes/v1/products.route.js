const express = require('express')
const {
  getProducts,
  addNewProduct,
  findProductById,
} = require('../../controllers/products.controller');
const router = express.Router();

/////////////// for faker db //////////////
// const { PRODUCTSDATA } = require('../../../config/fakerDB');
// /ap/v1/products
// router.get('/', (req, res)=>{
//   res.send(PRODUCTSDATA)
// })
///////////////////////////////////////////

router
  // /api/v1/products/
  .get("/", getProducts)
  // /api/v1/products/productId
  .get("/:productId", findProductById)
  // /api/v1/products/
  .post("/", addNewProduct)

module.exports = router