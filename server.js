const app = require('./config/expressApp');
const { port } = require('./config/constants');
const database = require('./config/database');
const path = require('path'); // for dev purposes only

/**Connect to Mongoose */
database.connect();

console.log(__dirname);

app.use('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.listen(port || 3001, () => {
  console.log(`
################################
 Server listening on port: ${port}
################################
  `);
});
