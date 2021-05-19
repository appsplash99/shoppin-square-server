const Wishlist = require("../models/wishlist.model");

exports.getWishlistItems = async (req, res) => {
  try {
    const wishlistItems = await Wishlist.find({})
    res.status(200).json({
      success: true,
      wishlistItems
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get wishlistItems, please check 'errorMessage' key for more details",
      errorMessage: error.message
    })
  }
}

exports.findWishlistItemById = async (req, res) => {
  try {
    const wishlistItem = await Wishlist.findById(req.params.wishlistItemId)
    res.status(200).json({
      success: true,
      wishlistItem
    })
  } catch (error) {
    res.status(400)
      .json({
        success: false,
        message: "Unable to retrive the wishlist Item"
      });
  }
}

exports.addNewWishlistItem = async (req, res) => {
  try {
    const newWishlistItem = new Wishlist({
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
    });
    const savedWishlistItem = await newWishlistItem.save()
    res.json({
      success: true,
      message: "WishlistItem successfully saved in the database",
      savedWishlistItem,
    })
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to save new Wishlist Item in the database",
      errorMessage: error.message
    })
  }
}

exports.deleteWishlistItem = async (req, res) => {
  try {
    const removeItem = await Wishlist.remove({
      _id: req.params.wishlistItemId
    })
    const newWishlistItems = await Wishlist.find();
    res.json({
      success: true,
      deletedItem: removeItem,
      newWishlistItems
    })
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete wishlist Item",
      errorMessege: error.message
    })
  }
}