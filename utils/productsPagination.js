const Product = require('../models/product.model')

exports.productsPagination = async (reqQueryPage, reqQueryLimit) => {
  let page = parseInt(reqQueryPage)
  let limit = parseInt(reqQueryLimit)

  let results = { page, limit }

  if (!page) results.page = 1
  if (!limit) results.limit = 5 // default number of products per page

  results.skip = (results.page - 1) * results.limit

  let startIndex = (results.page - 1) * results.limit
  let endIndex = results.page * results.limit

  if (endIndex < (await Product.countDocuments().exec())) {
    results.next = {
      page: results.page + 1,
      limit: results.limit,
    }
  }

  if (startIndex > 0) {
    results.previous = {
      page: results.page - 1,
      limit: results.limit,
    }
  }

  return results
}
