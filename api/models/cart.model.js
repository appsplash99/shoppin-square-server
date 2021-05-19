const mongoose = require("mongoose");
const {
  Schema
} = mongoose;

const cartSchema = new Schema({
  description: {
    type: String,
    trim: true,
    required: "description is required"
  },
  image: {
    type: String,
    trim: true,
    required: "image is required"
  },
  brandName: {
    type: String,
    trim: true,
    required: "brandName is required"
  },
  price: {
    type: String,
    trim: true,
    required: "price is required"
  },
  discount: {
    type: Number
  },
  isNewProduct: {
    type: Boolean,
  },
  sale: {
    type: Boolean
  },
  inStock: {
    type: Boolean
  },
  fastDelivery: {
    type: Boolean
  },
  ratings: {
    type: Number
  },
  numberOfRatings: {
    type: Number
  },
  qty: {
    type: Number
  },
  category: {
    type: String
  },
  offer: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Cart", cartSchema)