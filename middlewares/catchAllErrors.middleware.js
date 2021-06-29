exports.catchAllErrorHandler = async (err, req, res, next) => {
  consola.error(err.stack)
  res.status(500).json({ success: false, message: err.message })
}
