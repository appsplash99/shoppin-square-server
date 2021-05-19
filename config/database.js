const mongoose = require('mongoose');
const {uriEcommerce, uriInventory} = require("./vars");

const URI = uriEcommerce;

const connectToDb = async () => {
  try{
    await mongoose.connect(URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    console.log("MongoDB connected sucessfully")
  }catch(error){
    console.log("MongoDB connection has failed..", error)
  }
}
exports.connect = () => {
  return connectToDb()
};