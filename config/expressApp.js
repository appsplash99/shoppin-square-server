const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('../api/routes')

// initialize express app
const app = express()

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// mount api v1 routes
app.use('/api/', routes)

/** ADD */
// errorHandler
// app.use(errorHandler);
// path not found handler
// app.use(pathNotFound);

module.exports = app
