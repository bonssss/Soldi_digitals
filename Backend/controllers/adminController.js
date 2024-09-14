const jwt = require('jsonwebtoken');

// Admin credentials from environment variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Admin login controller
const loginAdmin = (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if credentials match the environment variables
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Generate a JWT token for admin
      const token = generateToken('admin');
      return res.json({ token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { loginAdmin };
