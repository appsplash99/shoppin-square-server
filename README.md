# shoppin-square-server

An REST api built on Express - to serve react ecommerce

## <ins>PUBLIC ROUTES</ins>

## Product Routes

| Sr No. | FUNCTION             | URL                               | Request Body Content |
| :----: | :------------------- | :-------------------------------- | :------------------- |
|   1.   | GET - All Product    | `BASE_URL/api/products`           | -                    |
|   2.   | GET - Single Product | `BASE_URL/api/products/productId` | -                    |

## Login and Register Routes

| Sr No. | FUNCTION                   | URL                     | Request Body Content      |
| :----: | :------------------------- | :---------------------- | :------------------------ |
|   1.   | POST - Login Existing User | `BASE_URL/api/login`    | { email, password }       |
|   2.   | POST - Register New User   | `BASE_URL/api/register` | { name, email, password } |

---

## <ins>PROTECTED ROUTES</ins>

## User Routes

| Sr No. | FUNCTION               | URL                        | Request Body Content             |
| :----: | :--------------------- | :------------------------- | :------------------------------- |
|   1.   | GET - Single User      | `BASE_URL/api/user/userId` | -                                |
|   2.   | UPDATE - User Details  | `BASE_URL/api/user/userId` | { [name], [email], [password]} - |
|   3.   | DELETE - User register | `BASE_URL/api/user/userId` | -                                |

## Cart Routes

| Sr No. | FUNCTION                        | URL                                       | Request Body Content |
| :----: | :------------------------------ | :---------------------------------------- | :------------------- |
|   1.   | GET - User Cart                 | `BASE_URL/api/cart/userId`                | -                    |
|   2.   | GET - Single Cart Item          | `BASE_URL/api/cart/userId/productId`      | -                    |
|   3.   | POST - Add New Cart Item        | `BASE_URL/api/cart/userId/productId`      | -                    |
|   4.   | PATCH - Update Qty of Cart Item | `BASE_URL/api/cart/userId/productId`      | { quantity }         |
|   5.   | DELETE - Cart Item              | `BASE_URL/api/cart/user/userId/productId` | -                    |

## Wishlist Routes
