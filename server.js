// port will be extracted from vars

const app = require('./config/expressApp')
const path = require('path'); // for dev purposes only
const {
  port
} = require('./config/vars')
// db connection
const database = require('./config/database');

// open mongoose connection
database.connect();

// Home route for testing
// 
app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'views', 'home.html')
  )
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})