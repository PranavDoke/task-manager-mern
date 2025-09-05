const rateLimit = {};

const rateLimiter = (windowMs = 15 * 60 * 1000, maxRequests = 100) => {
  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    
    if (!rateLimit[ip]) {
      rateLimit[ip] = { count: 1, resetTime: now + windowMs };
      return next();
    }
    
    if (now > rateLimit[ip].resetTime) {
      rateLimit[ip] = { count: 1, resetTime: now + windowMs };
      return next();
    }
    
    if (rateLimit[ip].count >= maxRequests) {
      return res.status(429).json({ 
        message: 'Too many requests, please try again later.' 
      });
    }
    
    rateLimit[ip].count++;
    next();
  };
};

module.exports = rateLimiter;