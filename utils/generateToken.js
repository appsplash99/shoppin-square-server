const jwt = require('jsonwebtoken')
const {
  jwtSecret
} = require("../config/constants")

// create + assign a JWT token
// with userId and TOKEN_SECRET
exports.generateToken = (user) => {
  return jwt.sign({
      _id: user._id,
    },
    jwtSecret
  );
};