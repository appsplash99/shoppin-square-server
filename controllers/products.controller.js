const Product = require('../models/product.model');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      products: products,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to get Products, please check 'errorMessage' key for more details",
      errorMessage: error.message,
    });
  }
};

exports.findProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Unable to retrive the product',
    });
  }
};

exports.addNewProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      description: req.body.description,
      image: req.body.image,
      brandName: req.body.brandName,
      price: req.body.price,
      discount: req.body.discount,
      rating: req.body.rating,
      isNewProduct: req.body.isNewProduct,
      sale: req.body.sale,
      inStock: req.body.inStock,
      fastDelivery: req.body.fastDelivery,
      ratings: req.body.ratings,
      numberOfRatings: req.body.numberOfRatings,
      qty: req.body.qty,
      category: req.body.category,
      offer: req.body.offer,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json({
      product: savedProduct,
      message: 'Product saved successfully in the database',
    });
  } catch (error) {
    res.status(500).json({
      success: 'false',
      message: 'Failed to save new Product in the database',
      errorMessage: error.message,
    });
  }
};
