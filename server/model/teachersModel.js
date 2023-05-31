const connection = require('../utils/db');

class studentsModel {
  getTeachers(callback) {
    const query = 'SELECT * FROM teachers';
    connection.query(query, (err, users) => {
      if (err) throw err;
      callback(users);
    });
  }

  getTeachersById(userId, callback) {
    const query = 'SELECT * FROM teachers WHERE id = ?';
    connection.query(query, [userId], (err, user) => {
      if (err) throw err;
      callback(user[0]);
    });
  }
}

module.exports = studentsModel;
