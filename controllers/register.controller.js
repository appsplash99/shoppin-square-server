const User = require('../models/user.model')
const { registerValidation } = require('../utils/validation')
const { initializeNewUser } = require('../utils/initializeNewUser')
const { generateHashedPassword } = require('../utils/generateHashedPassword')

exports.registerNewUser = async (req, res) => {
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
