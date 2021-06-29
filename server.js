const app = require('./config/expressApp');
const consola = require('consola')
const {
  port
} = require('./config/constants');
const database = require('./config/database');

/**Connect to Mongoose */
database.connect();

// console.log(__dirname);

//////////////////////////////// for dev purposes only
const path = require('path');
app.use('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '/views/home.html'));
});
//////////////////////////////// for dev purposes only

app.listen(port || 3001, () => {
  consola.success(`Express Server running on port: ${port}`);
});