const path = require('path');

require('dotenv').config()

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  uriInventory: process.env.MONGO_URI_INVENTORY_DB,
  uriEcommerce: process.env.MONGO_URI_ECOMMERCE_DB,
  // jwtSecret: process.env.JWT_SECRET,
  // jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  // mongo: {
  //   uri: process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TESTS : process.env.MONGO_URI,
  // },
  // logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  // emailConfig: {
  //   host: process.env.EMAIL_HOST,
  //   port: process.env.EMAIL_PORT,
  //   username: process.env.EMAIL_USERNAME,
  //   password: process.env.EMAIL_PASSWORD,
  // },
  // URI_ECOMMERCE_DB
  //
};