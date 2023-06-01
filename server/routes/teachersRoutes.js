const express = require('express')
const route = express.Router()
//getUserById, createUser,
// updateUser,
// deleteUser,
const {
    getTeachers,
  getTeachersById,
} = require('../controller/teachersController')
const {login, register, logout} = require('../controller/teachersAuthController');




route.get('/', getTeachers)
route.get('/:id', getTeachersById)




route.post('/login', login) 
route.post('/register', register) 
route.post('/logout', logout);

module.exports = route
