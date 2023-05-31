const pool = require('../utils/db');

class studentsModel {
  getStudents(callback) {
    const query = 'SELECT * FROM students';
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }
      connection.query(query, (err, users) => {
        if (err) throw err;
        callback(users);
      });
    })
  }

  getStudentsById(userId, callback) {
    const query = 'SELECT * FROM students WHERE id = ?';
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }
      
      connection.query(query, [userId], (err, user) => {
        if (err) throw err;
        callback(user[0]);
      });
    })
  }
}

module.exports = studentsModel;
