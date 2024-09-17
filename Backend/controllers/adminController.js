
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

// Admin credentials from environment variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1h' });
};

// Admin login controller
const loginAdmin = (req, res) => {
  const { username, password } = req.body;

  console.log('Admin Credentials from Env:', { ADMIN_USERNAME, ADMIN_PASSWORD });
  console.log('Login attempt:', { username, password });

  try {
    // Check if credentials match the environment variables
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Generate a JWT token for admin
      const token = generateToken('admin');
      console.log('Token generated:', token);
      return res.json({ token });
    } else {
      console.log('Invalid credentials');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { loginAdmin };
