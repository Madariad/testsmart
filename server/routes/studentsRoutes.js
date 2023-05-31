const express = require('express')
const route = express.Router()
//getUserById, createUser,
// updateUser,
// deleteUser,
const { getStudents, getStudentsById
  } = require('../controller/studentsController')




route.get('/', getStudents)
route.get('/:id', getStudentsById)

module.exports = route
