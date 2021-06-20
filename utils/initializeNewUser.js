const User = require('../models/user.model')
const Cart = require('../models/cart.model')
const Wishlist = require('../models/wishlist.model')
const Address = require('../models/address.model')

exports.initializeNewUser = async (user) => {
  let registeredUser = {}
  // save user
  const savedUser = await user.save()
  consola.info({ savedUser })
  registeredUser.userId = savedUser._id
  // initialize empty cart for registered user
  registeredUser.userCart = await new Cart({ _id: savedUser._id }).save()
  // initialize empty wishlist for user
  registeredUser.userWishlist = await new Wishlist({
    _id: savedUser._id,
  }).save()
  // initialize empty user address
  registeredUser.userAddress = await new Address({ _id: savedUser._id }).save()
  return registeredUser
}
