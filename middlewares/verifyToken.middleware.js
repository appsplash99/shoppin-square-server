const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/constants')
/**
 * To all private/protected routes
 * pass the below function as a middleware
 */

const verify = (req, res, next) => {
  // consuming token at each request from request headers
  // const token = req.header('auth-token')

  /**
   * Injected token from frontend is:
   * token = `Bearer ${token}`;
   * */
  const token = req.headers.authorization.split(' ')[1]
  if (!token) return res.status(401).send('Access Denied')

  try {
    // verifying token passsed by user
    // in comparison with server's .env TOKEN_SECRET
    const verifiedUser = jwt.verify(token, jwtSecret)

    // inject user: userId key-value pair in request
    req.user = verifiedUser
    next()
  } catch (error) {
    consola.error(new Error('Invalid Token', error))
    res.status(401).json({ success: false, messgge: 'Unauthorized User' })
  }
}

module.exports = verify
