const faker = require('faker')

faker.seed(123);

const productImages = [
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2170594/2018/5/19/24457960-64cd-461e-b6e0-1a5c4e9114821526717997313-Roadster-Men-Grey-Solid-Henley-Neck-T-shirt-5741526717995706-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7452058/2019/1/30/0b7be930-948c-4e5e-9419-da64232295941548845036379-DILLINGER-Men-Green--Black-Printed-Round-Neck-T-shirt-921548-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2221365/2017/11/23/11511442938830-Moda-Rapido-Men-White--Blue-Ombre-Dyed-Round-Neck-T-shirt-3181511442938622-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2475670/2018/5/16/c0af4b46-d3f1-4a2e-9bb6-9a56a3a19bfe1526455003664-Roadster-Men-Grey-Melange-Printed-Round-Neck-T-shirt-4641526455002020-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2221318/2017/12/6/11512544982740-Moda-Rapido-Men-Maroon-Colourblocked-Round-Neck-T-shirt-4391512544982619-1.jpg"
];

const productDiscounts = [20, 70, 50, 80, 60, 55];

const productBrands = ["Adidas", "Puma", "DMNX", "nike", "Roadster", "Fila"];

const productDescription = [
  "Men Navy Blue & Red Striped Round Neck T-shirt",
  "Abstract Print Training T-Shirt",
  "Men Grey Slub Effect Henley Neck T-shirt",
  "Men Green & Black Printed Round Neck T-shirt",
  "Longline Graphic Print Crew Neck Top"
];

const PRODUCTSDATA = [...Array(25)].map((product) => {
  return {
    description: faker.random.arrayElement([...productDescription]),
    image: faker.random.arrayElement([...productImages]),
    price: faker.commerce.price(),
    brandName: faker.random.arrayElement([...productBrands]),
    discount: faker.random.arrayElement([...productDiscounts]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1.7, 2, 2.9, 3.5, 4, 4.3, 4.5, 5]),
    numberOfRatings: faker.datatype.number(),
    qty: 1,
    offer: faker.random.arrayElement([
      "Save 50%",
      "70% bonanza",
      "Republic Day Sale"
    ]),
    inStock: faker.datatype.boolean(),
    isNewProduct: faker.datatype.boolean(),
    sale: faker.datatype.boolean(),
    category: 'men'
  };
});

// console.log(faker);
//

module.exports = {PRODUCTSDATA}
