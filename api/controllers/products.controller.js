const Product = require('../models/product.model');

exports.getProducts = async (req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({products: products, success: true})
    }
    catch(error) {
        res.status(500).json({success:false, message: "Failed to get Products, please check 'errorMessage' key for more details", errorMessage: error.message })
    }
}

exports.getProductById = async(req, res) => {
    const {product} = req;
    try {
        res.status(200).json({response: product, success: true})
    }
    catch(error) {
        res.status(400).json({ success:false, message: "product not found, please check 'errorMessage' key for more details", errorMessege: error.messege })
    }
}
