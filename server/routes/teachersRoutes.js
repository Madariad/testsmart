const express = require('express')
const route = express.Router()
//getUserById, createUser,
// updateUser,
// deleteUser,
const {
    getTeachers,
  getTeachersById,
} = require('../controller/teachersController')




route.get('/', getTeachers)
route.get('/:id', getTeachersById)

module.exports = route
