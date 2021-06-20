const Wishlist = require('../models/wishlist.model')

exports.getWishlistItems = async (req, res) => {
  let { wishlist } = req

  try {
    wishlist = await wishlist.populate('wishlistItems.product').execPopulate()
    res.status(200).json({
      success: true,
      message: "Successfully found User's Wishlist!",
      userWishlist: wishlist,
    })
  } catch (error) {
    consola.error(new Error('Unable to get User Wishlist', error))
    res.status(500).json({
      success: false,
      message: "Failed to get User's Wishlist",
      errorMessage: error.message,
    })
  }
}

exports.getOneWishlistItem = async (req, res) => {
  let { wishlist, product } = req
  try {
    let populatedWishlist = await wishlist
      .populate('wishlistItems.product')
      .execPopulate()
    let desiredWishlistItem = populatedWishlist.wishlistItems.id(product._id)
    res.status(200).json({
      success: true,
      message: 'WishlistItem found!',
      wishlistItem: desiredWishlistItem,
    })
  } catch (error) {
    consola.error(new Error('Unable to get desired Wishlist Item', error))
    res.status(400).json({
      success: false,
      message: 'Wishlist Item not found',
      error: error,
    })
  }
}

exports.addNewWishlistItem = async (req, res) => {
  let { product, wishlist } = req
  try {
    /** finding a sub-document */
    let productAlreadyInWishlist = wishlist.wishlistItems.id(product._id)
    if (productAlreadyInWishlist) {
      return res.send('Product Already exists in Wishlist Items')
    }
    const newProductData = {
      _id: product._id,
      product: product._id,
    }
    // update does not return anything
    await wishlist.updateOne({ $push: { wishlistItems: newProductData } })

    let latestPopulatedWishlist = await Wishlist.findOne({ _id: wishlist._id })
      .populate('wishlistItems.product')
      .exec()

    res.status(201).json({
      success: true,
      message: 'wishlistItem saved successfully in the database',
      latestWishlist: latestPopulatedWishlist,
    })
  } catch (error) {
    consola.error(new Error('Failed to Add new wishlist Item', error))
    res.status(500).json({
      success: 'false',
      message: 'Failed to save new wishlistItem in the database',
      errorMessage: error.message,
    })
  }
}

exports.deleteWishlistItem = async (req, res) => {
  let { wishlist, product } = req
  try {
    /** Select a sub-document to be removed */
    const wishlistItemToBeRemoved = wishlist.wishlistItems.id(product._id)

    /** Remove the subdoc */
    wishlistItemToBeRemoved.remove()
    /** Save new wishlist to database */
    wishlist.save()

    const newlyPopulatedWishlist = await wishlist
      .populate('wishlistItems.product')
      .execPopulate()
    res.json({
      success: true,
      message: 'Wishlist Item successfully removed',
      removedWishlistItem: wishlistItemToBeRemoved,
      latestWishlist: newlyPopulatedWishlist,
    })
  } catch (error) {
    consola.error(new Error('Failed to remove wishlist Item', error))
    res.json({
      success: false,
      message: 'Failed to remove wishlist Item',
      errorMessege: error.message,
    })
  }
}
