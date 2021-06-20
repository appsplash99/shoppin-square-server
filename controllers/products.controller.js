const Product = require('../models/product.model')

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({
      success: true,
      products: products,
    })
  } catch (error) {
    consola.error(new Error('Unable to get products', error))
    res.status(500).json({
      success: false,
      message: 'Failed to get Products',
      errorMessage: error.message,
    })
  }
}

exports.getOneProduct = async (req, res) => {
  let { product } = req
  try {
    res
      .status(200)
      .json({ success: true, message: 'Product Successfully found!', product })
  } catch (error) {
    consola.error(new Error('Product not found', error))
    res.status(500).json({
      success: false,
      message: 'Unable to get the Product',
      error: error,
    })
  }
}

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
    })
    const savedProduct = await newProduct.save()
    consola.success('Products Successfully Added to DB Created')
    res.status(201).json({
      product: savedProduct,
      message: 'Product saved successfully in the database',
    })
  } catch (error) {
    consola.error(new Error('Produts Not updated in database', error))
    res.status(500).json({
      success: 'false',
      message: 'Failed to save new Product in the database',
      errorMessage: error.message,
    })
  }
}
