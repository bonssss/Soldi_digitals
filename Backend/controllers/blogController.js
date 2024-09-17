const Blog = require('../models/Blog');

// Create a new blog post
const createBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new blog post without image
    const blog = new Blog({
      title,
      content,
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    console.error('Error creating blog post:', error.message);
    res.status(400).json({ message: 'Error creating blog post', error: error.message });
  }
};

// Get all blog posts
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error.message);
    res.status(500).json({ message: 'Error fetching blogs', error: error.message });
  }
};

// Update a blog post
const updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    // Update blog post without image
    const blog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    console.error('Error updating blog post:', error.message);
    res.status(400).json({ message: 'Error updating blog post', error: error.message });
  }
};

// Delete a blog post
const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted' });
  } catch (error) {
    console.error('Error deleting blog post:', error.message);
    res.status(500).json({ message: 'Error deleting blog post', error: error.message });
  }
};

module.exports = { createBlogPost, getBlogs, updateBlogPost, deleteBlogPost };
