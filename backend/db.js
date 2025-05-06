const { Pool } = require('pg');
require('dotenv').config();  // To load environment variables

// Use DATABASE_URL from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,  // This will ignore the SSL certificate verification (necessary for Neon)
  },
});

module.exports = pool;
