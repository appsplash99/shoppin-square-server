exports.productsFilter = (reqQueryFilter) => {
  /**
   * Tyes of filters:
   * 1. isNewProduct
   * 2. sale
   * 3. inStock
   * 4. fastDelivery
   * 5. category
   * 6. offer
   */

  // return empty object if falsy
  if (!reqQueryFilter) return {}

  const filterObj = {}

  if (reqQueryFilter.is_new_product)
    /** set filterObj's key with value from reqQueryFilter */
    filterObj.isNewProduct = reqQueryFilter.is_new_product
  if (reqQueryFilter.sale) filterObj.sale = reqQueryFilter.sale
  if (reqQueryFilter.in_stock) filterObj.inStock = reqQueryFilter.in_stock
  if (reqQueryFilter.fast_delivery)
    filterObj.fastDelivery = reqQueryFilter.fast_delivery
  if (reqQueryFilter.category) filterObj.category = reqQueryFilter.category
  if (reqQueryFilter.offer) filterObj.offer = reqQueryFilter.offer

  return filterObj
}

exports.productCategoryFromQuery = (reqQueryFilter) => {
    // returns types of Product Document filter
     if (reqQueryFilter && reqQueryFilter.category) {
       if (reqQueryFilter.category==='women') {
          return {category: 'women'};
        }
        if (reqQueryFilter.category==='men') {
          return {category: 'men'};
        }
      }
      return {};
  }