const express = require('express')
// const path = require('path'); // for dev purposes only
const cors = require("cors")
const bodyParser = require('body-parser');
const routes = require("../api/routes/v1")


const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api v1 routes
app.use('/api/v1', routes);

module.exports = app;