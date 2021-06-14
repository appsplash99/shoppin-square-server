const router = require('express').Router()
const {
  loginUser,
  registerNewUser,
  findUserById,
  deleteUser,
  updateUser,
} = require('../../controllers/user.controller')

/** router.param middleware which runs on all routes below it */
router.param('userId', findUserById)

/** User Routes */
router
  /** url route - BASE_URL/api/user/register */
  .post('/register', registerNewUser)
  // CREATE
  .post('/login', loginUser)

  // READ
  .get('/:userId', (req, res) =>
    res.status(200).json({
      success: true,
      user: req.user._id,
    })
  )

  // UPDATE
  .post('/:userId', updateUser)

  // DELETE
  .delete('/:userId', deleteUser)

// migh not need the '/ap/user/users' route
// .get("/users", (req, res) => res.send("all users"))

module.exports = router
