const Product = require('../models/product.model')
const { productsSorter } = require('../utils/productsSorter')
const { productsFilter } = require('../utils/productsFilter')
const { productsPagination } = require('../utils/productsPagination')

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

exports.getPaginatedProducts = async (req, res) => {
  let reqQuery = req.query
  /** TODO: might need to remove comments */
  /** reqQuery contains -
   * http://localhost:3000/api/products?filter[in_stock]=true&filter[sale]=true&sort=price_asc
   */

  let filterObj = productsFilter(reqQuery.filter)
  let sortObj = productsSorter(reqQuery.sort)
  let returnObj = await productsPagination({reqQueryPage: reqQuery.page, reqQueryLimit: reqQuery.size, reqQueryFilter: reqQuery.filter})
  let { limit, skip } = returnObj

  try {
    const products = await Product.find(
      /** TODO: might need to remove comments */
      /**
       * query.find(filter, [projection], [options], [callback])
       * filter - {inStock: true}
       * projection - optional fields to return, see Query.prototype.select()
       * options - optional see Query.prototype.setOptions()
       * callback - optional callback function
       */
      filterObj,
      null,
      { sort: sortObj, limit, skip }
    ).exec()
    res.status(200).json({
      success: true,
      message: 'successfuly fetched Paginated Products',
      ...returnObj,
      products,
    })
  } catch (error) {
    consola.error(new Error('Unable to get sorted products', error))
    res.status(500).json({
      success: false,
      message: 'Failed to get Products',
      errorMessage: error.message,
    })
  }
}
