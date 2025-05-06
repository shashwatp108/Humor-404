const express = require('express');
const pool = require('../db');
const bcrypt = require('bcrypt');  // We'll use bcrypt to hash passwords
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);  // Hash the password
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, hashedPassword]
    );
    res.status(201).json({ message: 'User created', user: result.rows[0] });
  } catch (err) {
    console.error('Error registering user:', err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);  // Compare hashed passwords
      if (match) {
        res.json({ message: 'Login successful', user: { username: user.username, id: user.id } });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error('Error logging in:', err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to delete an account
router.delete('/delete', async (req, res) => {
  const { user_id } = req.body;  // Assuming user_id is sent in the request body
  try {
    // await pool.query('DELETE FROM jokes WHERE owner = $1', [user_id]);  // Delete all jokes by this user
    await pool.query('DELETE FROM users WHERE id = $1', [user_id]);  // Delete the user
    res.json({ message: 'Account deleted successfully' });
  } catch (err) {
    console.error('Error deleting account:', err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
