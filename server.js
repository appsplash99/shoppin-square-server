// port will be extracted from vars

const app = require('./config/expressApp');
const path = require('path'); // for dev purposes only
const { port } = require('./config/vars');
// db connection
const database = require('./config/database');

// open mongoose connection
database.connect();

// Home route for testing
//
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

/////////////////////////////////////////////////////////////
// RUN ONCE FOR POPULATING PRODUCTS
// const Product = require('./api/models/product.model')
// const { PRODUCTSDATA } = require('./config/fakerDB')
// const populatateProductsinDB = async (req, res) => {
//   try {
//     PRODUCTSDATA.forEach(async (product) => {
//       const newProduct = new Product(product)
//       const savedProduct = await newProduct.save()
//       console.log(savedProduct)
//     })
//     res.status(201).json({
//       message:"All products are successfully saved to the database"
//     })
//   }
//   catch (error) {
//     res.status(500).json({
//           success:'false',
//           message:"All products failed to save to the database",
//           errorMessage: error.message
//     })
//   }
// }
// populatateProductsinDB()
///////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
