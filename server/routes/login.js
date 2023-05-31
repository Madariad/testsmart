const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const connection = require('../utils/db');
const route = express.Router();


route.post('/', (req, res) => {
    const { email, password } = req.body;
    
    const secretKey = 'test';

    connection.query(
      'SELECT * FROM teachers WHERE email = ?',
      [email],
      (err, results) => {
        if (err) {
          console.error('Error querying the database:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }
  

        if (results.length === 0) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
  
        const user = results[0];
  

        bcrypt.compare(password, user.password, (bcryptErr, isMatch) => {
          if (bcryptErr) {
            console.error('Error comparing passwords:', bcryptErr);
            return res.status(500).json({ message: 'Internal server error' });
          }
  
          if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
  

          const payload = {
            userId: user.id,
            email: user.email,

          };
  
          const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  
          res.json({ token });
        });
      }
    );
  });
module.exports = route