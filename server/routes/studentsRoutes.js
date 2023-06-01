const express = require('express')
const route = express.Router()
//getUserById, createUser,
// updateUser,
// deleteUser,
const { getStudents, getStudentsById
  } = require('../controller/studentsController')

const {login, register, logout} = require('../controller/studentsAuthController');




route.get('/', getStudents)
route.get('/:id', getStudentsById)




route.post('/login', login) 
route.post('/register', register) 
route.post('/logout', logout);



module.exports = route
