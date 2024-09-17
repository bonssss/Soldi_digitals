const express = require('express');
const router = express.Router();
const { createBlogPost, getBlogs, updateBlogPost, deleteBlogPost } = require('../controllers/blogController');
const { protect } = require('../middlewares/authMiddleware');

// Middleware to handle file uploads


// Routes
router.post('/', protect, createBlogPost); // Protect the route if needed
router.get('/', getBlogs);
router.put('/:id', protect, updateBlogPost); // Protect the route if needed
router.delete('/:id', protect, deleteBlogPost); // Protect the route if needed

module.exports = router;
