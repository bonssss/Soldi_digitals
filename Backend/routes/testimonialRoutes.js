const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { createTestimonial, getTestimonials, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController');

const router = express.Router();

// Apply `protect` middleware to routes that require authentication
router.post('/', protect, createTestimonial);
router.get('/', getTestimonials);
router.put('/:id', protect, updateTestimonial);
router.delete('/:id', protect, deleteTestimonial);

module.exports = router;
