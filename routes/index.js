const router = require('express').Router()

// Routes
const productRoutes = require('./products.router')
const wishlistRoutes = require('./wishlist.router')
const cartRoutes = require('./cart.router')
const userRoutes = require('./user.router')

// Middlewares
const verifyToken = require('../middlewares/verifyToken.middleware')

/**
 * GET api/status
 */
router.get('/status', (req, res) => res.send('OK'))

router.use('/products', productRoutes)

// Protected ROutes - need verifyToken Middleware
router.use('/wishlist', wishlistRoutes)
router.use('/cart', cartRoutes)
router.use('/user', userRoutes)

module.exports = router
