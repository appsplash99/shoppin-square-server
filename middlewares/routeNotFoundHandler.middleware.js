exports.routeNotFoundHandler = async (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Url Route Not Present!',
  })
}
