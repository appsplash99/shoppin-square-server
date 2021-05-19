const express = require('express');
const productRoutes = require('./products.route');
const wishlistRoutes = require('./wishlist.route');
const cartRoutes = require('./cart.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/products', productRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/cart', cartRoutes);

module.exports = router;