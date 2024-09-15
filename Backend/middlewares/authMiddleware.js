const jwt = require('jsonwebtoken');

// Protect middleware to verify JWT token
const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract token from Authorization header
      token = req.headers.authorization.split(' ')[1];

      // Decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if the token is for an admin
      if (decoded.id === 'admin') {
        next();
      } else {
        return res.status(401).json({ message: 'Not authorized' });
      }
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
