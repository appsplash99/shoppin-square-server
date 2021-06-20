const router = require('express').Router()
const {
  getOneUser,
  deleteUser,
  updateUser,
} = require('../controllers/user.controller')
const { findUserById } = require('../middlewares/routerParam.middleware')

/** router.param middleware which runs on all routes below it */
router.param('userId', findUserById)

router
  .get('/:userId', getOneUser)
  .patch('/:userId', updateUser)
  .delete('/:userId', deleteUser)

module.exports = router
