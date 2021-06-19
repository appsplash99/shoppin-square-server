const { Schema, model } = require('mongoose')

const wishlistItemsSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
})

const wishlistSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    wishlistItems: [wishlistItemsSchema],
  },
  { timestamps: true }
)

module.exports = model('Wishlist', wishlistSchema)
