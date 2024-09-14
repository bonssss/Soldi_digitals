const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { createTestimonial, getTestimonials, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController');

const router = express.Router();

router.post('/', authenticateToken, createTestimonial);
router.get('/', getTestimonials);
router.put('/:id', authenticateToken, updateTestimonial);
router.delete('/:id', authenticateToken, deleteTestimonial);

module.exports = router;
