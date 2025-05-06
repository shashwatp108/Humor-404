const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./db');  // Import the DB connection
dotenv.config();  // Load environment variables
const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');
const jokeRoutes = require('./routes/jokeRoutes');

// Middleware
app.use(cors());  // Allow all origins for now
app.use(express.json());  // Parse JSON bodies

// Routes
app.use('/api/users', userRoutes);
app.use('/api/jokes', jokeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
