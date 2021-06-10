const express = require('express');
const productRoutes = require('./products.router');
const wishlistRoutes = require('./wishlist.router');
const cartRoutes = require('./cart.router');

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
