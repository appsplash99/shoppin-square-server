const router = require('express').Router()

// Routes
const productRoutes = require('./products.router')
const loginRoutes = require('./login.router')
const registerRoutes = require('./register.router')
const userRoutes = require('./user.router')
const cartRoutes = require('./cart.router')
const wishlistRoutes = require('./wishlist.router')

// Middlewares
const verifyToken = require('../middlewares/verifyToken.middleware')

/**
 * GET api/status
 */
router.get('/status', (req, res) => res.send('OK'))

/** Public Routes */
router.use('/products', productRoutes)
router.use('/login', loginRoutes)
router.use('/register', registerRoutes)

/** Private Routes */
router.use('/wishlist', verifyToken, wishlistRoutes)
router.use('/cart', verifyToken, cartRoutes)
router.use('/user', verifyToken, userRoutes)

module.exports = router
