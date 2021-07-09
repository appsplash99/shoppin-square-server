const { extend } = require('lodash')
const { generateHashedPassword } = require('../utils/generateHashedPassword')

exports.getOneUser = async (req, res) => {
  let { user } = req
  user.password = undefined
  try {
    res.status(200).json({
      success: true,
      message: 'Successfully found the user',
      user,
    })
  } catch (error) {
    consola.error(new Error('Unable to get User Details', error))
    res.status(500).json({
      success: false,
      message: 'Unable to get User Details',
      error: error,
    })
  }
}

exports.updateUser = async (req, res) => {
  let { user } = req
  let newUserInfo = req.body

  // hash password if present
  if (newUserInfo.password) {
    consola.info('hashedPass')
    newUserInfo.password = await generateHashedPassword(newUserInfo.password)
  }
  try {
    user = extend(user, newUserInfo)
    user.save()
    res.status(201).json({
      success: true,
      message: 'Successfully updated User Details',
      user,
    })
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
