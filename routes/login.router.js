const router = require('express').Router()
const { loginUser } = require('../controllers/login.controller')

router.post('/', loginUser)

module.exports = router
