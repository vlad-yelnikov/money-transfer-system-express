function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  return res.status(err.status || 400).json({
    error: err.message,
  });
}

module.exports = errorHandler;
