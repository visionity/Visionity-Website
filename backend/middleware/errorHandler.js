const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    // Development error
    if (process.env.NODE_ENV === 'development') {
      return res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
      });
    } 
    
    // Production error
    else {
      // Operational, trusted error: send message to client
      if (err.isOperational) {
        return res.status(err.statusCode).json({
          status: err.status,
          message: err.message
        });
      }
      
      // Programming or other unknown error: don't leak error details
      console.error('ERROR 💥', err);
      return res.status(500).json({
        status: 'error',
        message: 'Something went wrong'
      });
    }
  };
  
  module.exports = errorHandler;