const express = require('express')
const { PRODUCTSDATA } = require('../../../config/fakerDB');
const { getProducts, getProductById, populatateProductsinDB } = require('../../controllers/products.controller');
const router = express.Router();

// /ap/v1/products
// router.get('/', (req, res)=>{
//   res.send(PRODUCTSDATA)
// })

// /api/v1/products/
router.get("/", getProducts);
// /api/v1/products/product/:productId
router.get("/product/:productId", getProductById);


module.exports = router