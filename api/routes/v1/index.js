const express = require('express');
const productRoutes = require('./products.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

///////////////////////// all routes will come here
router.use('/products', productRoutes);

module.exports = router;