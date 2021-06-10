const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../api/routes');

const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// mount api v1 routes
app.use('/api/', routes);

module.exports = app;
