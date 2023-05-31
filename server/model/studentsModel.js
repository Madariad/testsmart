const connection = require('../utils/db');

class studentsModel {
  getStudents(callback) {
    const query = 'SELECT * FROM students';
    connection.query(query, (err, users) => {
      if (err) throw err;
      callback(users);
    });
  }

  getStudentsById(userId, callback) {
    const query = 'SELECT * FROM students WHERE id = ?';
    connection.query(query, [userId], (err, user) => {
      if (err) throw err;
      callback(user[0]);
    });
  }
}

module.exports = studentsModel;
