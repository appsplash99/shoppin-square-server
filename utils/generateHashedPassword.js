const bcrypt = require('bcrypt')

exports.generateHashedPassword = async (pass) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPass = await bcrypt.hash(pass, salt)
  return hashedPass
}