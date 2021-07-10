const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const { generateToken } = require('../utils/generateToken')
const { loginValidation } = require('../utils/validation')

exports.loginUser = async (req, res) => {
  // validate user before logging in
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // does email exists
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Email does not exist')

  // is typed password correct?
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send('Please Enter Correct Password')

  const token = generateToken(user)

  // pass token into response headers
  res.header('auth-token', token).json({
    success: true,
    token,
    userId: user._id,
    user: user
  })
}
