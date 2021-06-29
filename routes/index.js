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

router.use('/products', productRoutes)
router.use('/login', loginRoutes)
router.use('/register', registerRoutes)

// TODO: Protected Routes - need verifyToken Middleware
router.use('/wishlist', wishlistRoutes)
router.use('/cart', cartRoutes)
router.use('/user', userRoutes)

module.exports = router
