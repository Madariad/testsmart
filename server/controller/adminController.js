const studentsModel = require('../model/studentsModel');
const students = new studentsModel();

function adminsPageViews(req, res) {
  students.getStudents((users) => {
    const usersData = users.map(element => element);
    res.render('test', { title: 'Admin Panel', students: usersData });

  });
}


module.exports = {adminsPageViews}