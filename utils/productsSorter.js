exports.productsSorter = (reqQuerySort) => {
  /**
   * Types of Products Sorting -
   * 1. price - asc/desc
   * 2. discount - asc/desc
   * 3. ratings - asc/desc
   * 4. numberOfRatings - asc/desc
   */

  switch (reqQuerySort) {
    case 'price_asc':
      return { price: 1 }
    case 'price_desc':
      return { price: -1 }
    case 'discount_asc':
      return { discount: 1 }
    case 'discount_desc':
      return { discount: -1 }
    case 'ratings_asc':
      return { ratings: 1 }
    case 'ratings_desc':
      return { ratings: -1 }
    case 'number_of_ratings_asc':
      return { numberOfRatings: 1 }
    case 'number_of_ratings_desc':
      return { numberOfRatings: -1 }
    default:
      return {}
  }
}
