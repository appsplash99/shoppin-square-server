const { Schema, model } = require("mongoose")

const cartSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    cartItems: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    /**
     * cartItems - obj
     * {
     *    prod1Id : {product: productObj, qty: 5},
     *    prod2Id : {product: productObj, qty: 6},
     *    prod3Id : {product: productObj, qty: 7},
     * }
     *
     */
  },
  {
    timestamps: true,
  }
)

module.exports = model("Cart", cartSchema)
