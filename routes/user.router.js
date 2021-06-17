const router = require('express').Router()
const {
  registerNewUser,
  loginUser,
  deleteUser,
  updateUser,
} = require('../controllers/user.controller')
const { findUserById } = require('../controllers/routerParam.controller')

/** router.param middleware which runs on all routes below it */
router.param('userId', findUserById)

/** User Routes */
router
  /** url route - BASE_URL/api/user/register */
  .post('/register', registerNewUser)
  // CREATE
  .post('/login', loginUser)

  // READ
  .get('/:userId', (req, res) => {
    res.status(200).json({ success: true, user: req.user._id })
  })

  // UPDATE
  .patch('/:userId', updateUser)

  // DELETE
  .delete('/:userId', deleteUser)

// might not need the '/ap/user/users' route
// .get("/users", (req, res) => res.send("all users"))

module.exports = router
