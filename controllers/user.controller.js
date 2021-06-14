const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const {
  generateToken
} = require('../utils/generateToken')
const {
  generateHashedPassword
} = require('../utils/generateHashedPassword')
const {
  registerValidation,
  loginValidation
} = require('../utils/validation')

/** 
 * controller for router.param middleware 
 * */
exports.findUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    if (!user) res.status(400).send('User Not found!')
    req.user = user
    consola.success('User found by userId')
    next()
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Unable to retrive the User by userId',
      error: err,
    })
  }
}

/** 
 * remaining route controllers 
 * */
exports.registerNewUser = async (req, res) => {
  // TODO: below lines might be abstracted by errorHandler
  // validate user before saving to database
  const {
    error
  } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // check if email exists
  const emailAlreadyExists = await User.findOne({
    email: req.body.email,
  })
  if (emailAlreadyExists) return res.status(400).send('Email already Exists')

  // proceed to save user
  const {
    name,
    email,
    password
  } = req.body

  // Hash password
  const hashedPassword = await generateHashedPassword(password)

  // save new user - with hashedPassword
  const user = new User({
    name,
    email,
    password: hashedPassword,
  })

  try {
    // save user
    const savedUser = await user.save()
    res.status(201).json({
      success: true,
      user: savedUser._id,
    })
  } catch (err) {
    consola.error(new Error('Error while saving user', err))
    res.status(400).json({
      success: false,
      error: err.message,
    })
  }
}

exports.loginUser = async (req, res) => {
  // TODO: below lines might be abstracted by errorHandler
  // validate user before logging in
  const {
    error
  } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // does email exists
  const user = await User.findOne({
    email: req.body.email,
  })
  if (!user) return res.status(400).send('Email does not exist')

  // is typed password correct?
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send('Please Enter Correct Password')

  const token = generateToken(user)

  // pass token into response headers
  res.header('auth-token', token).json({
    success: true,
    token
  })
}

exports.updateUser = async (req, res) => {
  const newUserInfo = req.body
  /**
   * check for edge cases
   */
  if (newUserInfo.password) {
    consola.info('hashedPass')
    newUserInfo.password = await generateHashedPassword(newUserInfo.password)
  }

  try {
    const updatedUser = await User.update({
      _id: req.user._id
    }, {
      $set: newUserInfo
    })
    // consola.info(updatedUser)
    res.status(201).json({
      success: true,
      user: updatedUser._id
    })
  } catch (err) {
    consola.error(new Error('Error while Updating user', err))
    res.status(400).json({
      success: false,
      message: 'Error while Updating user',
      error: err
    })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    let {
      user
    } = req
    await user.remove()
    res.status(200).json({
      success: true,
      deletedUser: user._id
    })
  } catch (err) {
    consola.error(new Error('Cannot remove selected user'))
    res.status(200).json({
      success: false,
      user: user._id,
      error: err
    })
  }
}