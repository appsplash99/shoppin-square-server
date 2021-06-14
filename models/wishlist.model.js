const {
  model,
  Schema
} = require('mongoose')

const wishlistSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
}, {
  timestamps: true,
})

module.exports = model("Wishlist", wishlistSchema)