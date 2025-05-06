const express = require('express');
const pool = require('../db');  // Import the DB connection
const router = express.Router();

// Route to fetch a random joke
router.get('/random', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1');
    if (result.rows.length > 0) {
      res.json(result.rows[0]);  // Return the random joke
    } else {
      res.status(404).json({ message: 'No jokes found' });
    }
  } catch (err) {
    console.error('Error fetching joke:', err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to add a new joke
router.post('/add', async (req, res) => {
    const { joke, user_id } = req.body;  // Assuming joke and user_id are sent in the request body
    try {
      const result = await pool.query(
        'INSERT INTO jokes (joke, owner) VALUES ($1, $2) RETURNING *',
        [joke, user_id]
      );
      res.status(201).json({ message: 'Joke added successfully', joke: result.rows[0] });
    } catch (err) {
      console.error('Error adding joke:', err.stack);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

module.exports = router;
