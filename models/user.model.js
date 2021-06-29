const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: 'name is required',
      minlength: 6,
      maxlength: 20,
    },
    email: {
      type: String,
      unique: true,
      required: 'email is required',
      minlength: 6,
      maxlength: 255,
    },
    password: {
      type: String,
      required: 'Please enter valid password to continue!',
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model('User', userSchema)
