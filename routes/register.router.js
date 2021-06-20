const router = require('express').Router()
const { registerNewUser } = require('../controllers/register.controller')

router.post('/', registerNewUser)

module.exports = router
