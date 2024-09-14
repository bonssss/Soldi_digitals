const express = require('express');
const { loginAdmin } = require('../controllers/adminController');

const router = express.Router();

// POST request for admin login
router.post('/login', loginAdmin);

module.exports = router;
