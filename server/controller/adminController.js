const studentsModel = require('../model/studentsModel');

const students = new studentsModel();

function adminsPageViews(req, res) {
    const usersData = []
     students.getStudents((users) => {
       for (let i = 0; i < users.length; i++) {
        const element = users[i];
        usersData.push(element)
        // console.log(element);
        
       }
        // usersData.push(users)
        
      });
      console.log(usersData);
     
      res.render('test', usersData);
}

module.exports = {adminsPageViews}