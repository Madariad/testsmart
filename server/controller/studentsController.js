const studentsModel = require('../model/studentsModel');

const students = new studentsModel();

const getStudents = (req, res) => {
  students.getStudents((users) => {
    res.json(users);
  });
};

const getStudentsById = (req, res) => {
  const userId = req.params.id;
  students.getStudentsById(userId, (user) => {
    res.json(user);
  });
};

module.exports = {
  getStudents,
  getStudentsById,
  // createUser,
  // updateUser,
  // deleteUser,
};
