const Product = require('../models/product.model')
const User = require('../models/user.model')
const Cart = require('../models/cart.model')
const Wishlist = require('../models/wishlist.model')

/**
 * User controller for router.param middleware
 * */
exports.findUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    if (!user) res.status(400).send('User Not found!')
    req.user = user
    consola.success('User found by userId')
    next()
  } catch (err) {
    consola.error('Unable to find User by userId')
    res.status(400).json({
      success: false,
      message: 'Unable to retrive the User by userId',
      error: err,
    })
  }
}

/**
 * controller for Product router.param middleware
 * */
exports.findProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId)
    if (!product) res.status(400).send('Product Not found!')
    req.product = product
    consola.success('Product found by productId')
    next()
  } catch (err) {
    consola.error(new Error('Cannot find Product by productId', err))
    res.status(400).json({
      success: false,
      message: 'Unable to retrive the Product by productId',
      error: err,
    })
  }
}

/**
 * controller for Cart router.param middleware
 * */
exports.findCartByUserId = async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.userId)
    if (!cart) res.status(400).send('cart Not found!')
    req.cart = cart
    consola.success('cart found by userId')
    next()
  } catch (err) {
    consola.error(new Error('Cannot find cart by userId', err))
    res.status(400).json({
      success: false,
      message: 'Unable to find the cart by userId',
      error: err,
    })
  }
}

/**
 * controller for Wishlist router.param middleware
 */
exports.findWishlistByUserId = async (req, res, next) => {
  try {
    const wishlist = await Wishlist.findById(req.params.userId)
    if (!wishlist) res.status(400).send('wishlist Not found!')
    req.wishlist = wishlist
    consola.success('wishlist found by userId')
    next()
  } catch (err) {
    consola.error(new Error('Cannot find wishlist by userId', err))
    res.status(400).json({
      success: false,
      message: 'Unable to find the wishlist by userId',
      error: err,
    })
  }
}
