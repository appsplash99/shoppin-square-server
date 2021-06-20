const Cart = require('../models/cart.model')

exports.getCartItems = async (req, res) => {
  let { cart } = req
  try {
    cart = await cart.populate('cartItems.product').execPopulate()
    res.status(200).json({
      success: true,
      message: "Successfully found User's Cart!",
      cart,
    })
  } catch (error) {
    consola.error(new Error('Unable to get User Cart', error))
    res.status(500).json({
      success: false,
      message: 'Failed to get Cart Items',
      errorMessage: error.message,
    })
  }
}

exports.getOneCartItem = async (req, res) => {
  let { cart, product } = req
  try {
    let populatedCart = await cart.populate('cartItems.product').execPopulate()
    let desiredCartItem = populatedCart.cartItems.id(product._id)
    res.status(200).json({
      success: true,
      message: 'CartItem found!',
      cartItem: desiredCartItem,
    })
  } catch (error) {
    consola.error(new Error('Unable to get desired Cart Item', error))
    res
      .status(400)
      .json({ success: false, message: 'Cart Item not found', error: error })
  }
}

exports.addNewCartItem = async (req, res) => {
  let { product, cart } = req
  try {
    /** finding a sub-document */
    let productAlreadyInCart = cart.cartItems.id(product._id)
    if (productAlreadyInCart) {
      /**
       * TODO: HANDLE ALL(ACROSS THE APP) ERRORS WITH DESIRED:
       * STATUS,
       * SPECIFIC JSON MESSAGE
       */

      return res.send('Product Already exists in CartItems')
    }

    const newProductData = {
      _id: product._id,
      product: product._id,
      quantity: 1,
    }

    // update does not return anything
    await cart.updateOne({ $push: { cartItems: newProductData } })

    let latestPoulatedCart = await Cart.findOne({ _id: cart._id })
      .populate('cartItems.product')
      .exec()

    res.status(201).json({
      success: true,
      message: 'cartItem saved successfully in the database',
      latestCart: latestPoulatedCart,
    })
  } catch (error) {
    consola.error(new Error('Failed to Add new cart Item', error))
    res.status(500).json({
      success: 'false',
      message: 'Failed to save new cartItem in the database',
      errorMessage: error.message,
    })
  }
}

exports.updateCartItemQtyById = async (req, res) => {
  let { cart, product } = req
  try {
    const updatedCartItem = await Cart.findOneAndUpdate(
      { _id: cart._id, 'cartItems._id': product._id },
      { $set: { 'cartItems.$.quantity': req.body.quantity } },
      { useFindAndModify: false }
    )
    let newPopulatedCart = await cart
      .populate('cartItems.product')
      .execPopulate()

    /** Find the sub-document with _id equal to product._id*/
    const newlyUpdatedCartItem = updatedCartItem.cartItems.id(product._id)
    res.json({
      success: true,
      message: "Cart Item's Quantity Updated Successfully!",
      updatedCartItem: newlyUpdatedCartItem,
      latestCartItems: newPopulatedCart,
    })
  } catch (err) {
    consola.error(
      new Error(new Error('Unable to update Quantity of desired CartItem', err))
    )
    res.status(400).json({
      success: false,
      message: 'Unable to update Quantity of desired CartItem',
      message: err,
    })
  }
}

exports.deleteCartItem = async (req, res) => {
  let { cart, product } = req
  try {
    /** Select a sub-document to be removed */
    const cartItemToBeRemoved = cart.cartItems.id(product._id)

    /** Remove the subdoc */
    cartItemToBeRemoved.remove()
    /** Save new cart to database */
    cart.save()

    const newlyPopulatedCart = await cart
      .populate('cartItems.product')
      .execPopulate()
    res.json({
      success: true,
      message: 'Cart Item successfully removed',
      removedCartItem: cartItemToBeRemoved,
      latestCart: newlyPopulatedCart,
    })
  } catch (error) {
    consola.error(new Error('Failed to remove cart Item', error))
    res.json({
      success: false,
      message: 'Failed to remove cart Item',
      errorMessege: error.message,
    })
  }
}
