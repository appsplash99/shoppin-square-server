const app = require('./config/expressApp')
const consola = require('consola')
const { port } = require('./config/constants')
const database = require('./config/database')

/**Connect to Mongoose */
database.connect()

app.listen(port || 3001, () => {
  consola.success(`Express Server running on port: ${port}`)
})
