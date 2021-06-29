const mongoose = require('mongoose');
const {
  uriEcommerce,
  uriInventory,
  uriNewEcommerce
} = require('./constants');

const URI = uriNewEcommerce;

const connectToDb = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    consola.success('MongoDB connected sucessfully');
  } catch (error) {
    consola.error('MongoDB connection has failed..', error);
  }
};
exports.connect = () => {
  return connectToDb();
};