const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../utils/db');




function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      connection.query(sql, values, (error, results) => {
        connection.release(); 

        if (error) {
          reject(error);
          return;
        }

        resolve(results);
      });
    });
  });
}

const secretKey = 'your-secret-key'; 

async function register(req, res) {
  try {
    const { email, password } = req.body;


    const checkUserSql = 'SELECT * FROM students WHERE email = ?';
    const existingUser = await query(checkUserSql, [email]);

    if (existingUser.length > 0) {
      res.status(409).json({ error: 'Email already exists' });
      return;
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    const insertUserSql = 'INSERT INTO students (email, password) VALUES (?, ?)';
    await query(insertUserSql, [email, hashedPassword]);

    const token = jwt.sign({ email }, secretKey);
    res.json({ token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;


    const getUserSql = 'SELECT * FROM students WHERE email = ?';
    const user = await query(getUserSql, [email]);

    if (user.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user[0].password);

    if (passwordMatch) {
      const token = jwt.sign({ email: user[0].email }, secretKey);
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
}

module.exports = { register, login };
