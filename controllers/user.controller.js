const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const { initializeNewUser } = require('../utils/initializeNewUser')
const { generateToken } = require('../utils/generateToken')
const { generateHashedPassword } = require('../utils/generateHashedPassword')
const { registerValidation, loginValidation } = require('../utils/validation')

/**controllers for individual routes */
exports.registerNewUser = async (req, res) => {
  // TODO: below lines might be abstracted by errorHandler
  // validate user before saving to database
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // check if email exists
  const emailAlreadyExists = await User.findOne({ email: req.body.email })
  if (emailAlreadyExists) return res.status(400).send('Email already Exists')

  // proceed to save user
  const { name, email, password } = req.body

  // Hash password
  const hashedPassword = await generateHashedPassword(password)

  // save new user - with hashedPassword
  const user = new User({
    name,
    email,
    password: hashedPassword,
  })

  try {
    const registeredUser = await initializeNewUser(user)
    res.status(201).json({
      success: true,
      message: 'User Registered Successfully',
      ...registeredUser,
    })
  } catch (err) {
    consola.error(new Error('User Registeration Failed', err))
    res.status(400).json({
      success: false,
      message: 'User Registeration Failed',
      error: err,
    })
  }
}

exports.loginUser = async (req, res) => {
  // TODO: below lines might be abstracted by errorHandler
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
  })
}

exports.updateUser = async (req, res) => {
  const newInfoOfUser = req.body
  /**
   * check for edge cases
   */
  if (newInfoOfUser.password) {
    consola.info('hashedPass')
    newInfoOfUser.password = await generateHashedPassword(
      newInfoOfUser.password
    )
  }

  try {
    const updatedUser = await User.update(
      { _id: req.user._id },
      { $set: newInfoOfUser }
    )
    // consola.info(updatedUser)
    res.status(201).json({ success: true, user: updatedUser._id })
  } catch (err) {
    consola.error(new Error('Error while Updating user', err))
    res.status(400).json({
      success: false,
      message: 'Error while Updating user',
      error: err,
    })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    let { user } = req
    await user.remove()
    res.status(200).json({ success: true, deletedUser: user._id })
  } catch (err) {
    consola.error(new Error('Cannot remove selected user'))
    res.status(200).json({ success: false, user: user._id, error: err })
  }
}
