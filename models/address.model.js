const { Schema, model } = require('mongoose')

const addressChildSchema = {
  address: { type: String },
  city: { type: String },
  postcode: { type: String },
  country: { type: String },
}

const addressSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    addresses: [addressChildSchema],
  },
  { timestamps: true }
)

module.exports = model('Address', addressSchema)
