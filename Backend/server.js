require('dotenv').config(); 
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes')
const testimonialRoutes= require('./routes/testimonialRoutes')

// Load environment variables
dotenv.config();
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('MONGO_URI:', process.env.MONGO_URI);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Example test route
app.get('/', (req, res) => {
  res.send('SOLDI backend is running!');
});

app.use('/api/admin', adminRoutes);
app.use('/api/testimonials', testimonialRoutes);



// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('DB connection error:', error));

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
