const express = require('express')
const route = express.Router()
const {adminsPageViews} = require('../controller/adminController')

route.get('/', adminsPageViews)


module.exports = route