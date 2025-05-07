const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./db');
dotenv.config();

const app = express();

const userRoutes = require('./routes/userRoutes');
const jokeRoutes = require('./routes/jokeRoutes');
const mailRoutes = require('./routes/mailRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/jokes', jokeRoutes);
app.use('/api/contact', mailRoutes); // This now connects properly

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
