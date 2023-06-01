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

const secretKey = 'cZ#tT{m$g2M+LB8&9b6m7{DnQR@fThyJ';


async function register(req, res) {
  try {
    const { first_name, last_name, age, gender,  email, phone_number, subject, date_of_registration, password } = req.body;


    const checkUserSql = 'SELECT * FROM teachers WHERE email = ?';
    const existingUser = await query(checkUserSql, [email]);

    if (existingUser.length > 0) {
      res.status(409).json({ error: 'Email already exists' });
      return;
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    const insertUserSql = 'INSERT INTO teachers (first_name, last_name, age, gender,  email, phone_number, subject, date_of_registration, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    await query(insertUserSql, [first_name, last_name, age, gender,  email, phone_number, subject,  date_of_registration, hashedPassword]);
    res.json({status: 'success'})
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const getUserSql = 'SELECT * FROM teachers WHERE email = ?';
    const user = await query(getUserSql, [email]);

    if (user.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user[0].password);

    if (passwordMatch) {
      const token = jwt.sign({ email: user[0].email }, secretKey);

      const insertTokenSql = 'INSERT INTO tokens (token) VALUES (?)';
      await query(insertTokenSql, [token]);

      res.json({ token: token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
}



async function logout(req, res) {
  try {
    const token = req.headers.authorization;

    // Remove the token from the blacklist
    const removeFromBlacklistSql = 'DELETE FROM tokens WHERE token = ?';
    await query(removeFromBlacklistSql, [token]);

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'Failed to log out' });
  }
}





// async function token_blacklist(req, res) {
//   try {
//     const token = req.headers.authorization;

    
//     const addToBlacklistSql = 'INSERT INTO token_blacklist (token) VALUES (?)';
//     await query(addToBlacklistSql, [token]);

//     res.json({ message: 'Logged out successfully' });
//   } catch (error) {
//     console.error('Error during logout:', error);
//     res.status(500).json({ error: 'Failed to log out' });
//   }
// }


module.exports = { register, login, logout };
