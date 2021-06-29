const { Schema, model } = require('mongoose')

const cartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, default: 1 },
})

const cartSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems: [cartItemSchema],
  },
  { timestamps: true }
)

module.exports = model('Cart', cartSchema)
