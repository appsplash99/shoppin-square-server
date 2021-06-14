const Cart = require('../models/cart.model')

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({})
    res.status(200).json({
      success: true,
      cartItems,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get Cart Items',
      errorMessage: error.message,
    })
  }
}

exports.findCartItemById = async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.cartItemId)
    res.status(200).json({
      success: true,
      cartItem,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Unable to retrive the cart Item',
    })
  }
}

exports.addNewCartItem = async (req, res) => {
  try {
    const newCartItem = new Cart({
      description: req.body.description,
      image: req.body.image,
      brandName: req.body.brandName,
      price: req.body.price,
      discount: req.body.discount,
      rating: req.body.rating,
      isNewProduct: req.body.isNewProduct,
      sale: req.body.sale,
      inStock: req.body.inStock,
      fastDelivery: req.body.fastDelivery,
      ratings: req.body.ratings,
      numberOfRatings: req.body.numberOfRatings,
      qty: req.body.qty,
      category: req.body.category,
      offer: req.body.offer,
    })
    const savedCartItem = await newCartItem.save()
    res.status(201).json({
      success: true,
      message: 'cartItem saved successfully in the database',
      savedCartItem,
    })
  } catch (error) {
    res.status(500).json({
      success: 'false',
      errorMessage: error.message,
      message: 'Failed to save new cartItem in the database',
    })
  }
}

exports.deleteCartItemById = async (req, res) => {
  try {
    const removeCartItem = await Cart.remove({
      _id: req.params.cartItemId,
    })
    const newCartItems = await Cart.find()
    res.json({
      success: true,
      deletedCartItem: removeCartItem,
      newCartItems,
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'Failed to delete cart Item',
      errorMessege: error.message,
    })
  }
}

exports.updateCartItemQtyById = async (req, res) => {
  try {
    const updatedCartItem = await Cart.updateOne(
      {
        _id: req.params.cartItemId,
      },
      {
        $set: {
          qty: req.body.qty,
        },
      }
    )
    const newCartItems = await Cart.find()
    res.json({
      success: true,
      updatedCartItem,
      newCartItems,
    })
    // console.log(updatedPrd);
  } catch (err) {
    res.json({
      message: err.message,
    })
    console.log(err)
  }
}
