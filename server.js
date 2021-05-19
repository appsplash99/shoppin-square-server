const app = require('./config/expressApp');
const path = require('path'); // for dev purposes only
const {
  port
} = require('./config/vars');
const database = require('./config/database');

/**Connect to Mongoose */
database.connect();

app.listen(port || 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});