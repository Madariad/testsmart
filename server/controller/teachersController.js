const teachersModel = require('../model/teachersModel');

const students = new teachersModel();

const getTeachers = (req, res) => {
  students.getTeachers((users) => {
    res.json(users);
  });
};

const getTeachersById = (req, res) => {
  const userId = req.params.id;
  students.getTeachersById(userId, (user) => {
    res.json(user);
  });
};

module.exports = {
    getTeachers,
  getTeachersById,
  // createUser,
  // updateUser,
  // deleteUser,
};
