const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('../routes')
const {
  catchAllErrorHandler,
} = require('../middlewares/catchAllErrors.middleware')
const {
  routeNotFoundHandler,
} = require('../middlewares/routeNotFoundHandler.middleware')

// initialize express app
const app = express()

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// parse body params and attatch them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mount api v1 routes
app.use('/api/', routes)

/**
 * Catch All Errors,
 * which are missed by try-catch blocks,
 * within all routes above
 */
app.use(catchAllErrorHandler)

/**
 * When a route is not found,
 * return a response,
 * instead of an html page(default express behaviour)
 */
app.use(routeNotFoundHandler)

module.exports = app
