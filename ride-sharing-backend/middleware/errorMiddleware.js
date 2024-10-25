const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Set status code
    res.status(statusCode).json({
      message: err.message, // Error message
      stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Stack trace for non-production environments
    });
  };
  
  module.exports = { errorHandler };
  