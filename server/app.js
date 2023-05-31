const express = require('express')
const studentsRoutes = require('./routes/studentsRoutes')
const teachersRoutes = require('./routes/teachersRoutes')
const app = express()
const cors = require('cors');
require('dotenv').config()
const connection = require('./utils/db')
const jwt = require('jsonwebtoken');
const authenticateToken = require('./middleware/authenticateToken')
const login = require('./routes/login')





connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.use(express.json())
app.use(cors());

app.use('/api/v1/students', studentsRoutes)
app.use('/api/v1/teachers', teachersRoutes)

app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route', user: req.user });
});
  
app.use('/api/v1/login', login)

// app.use(rouer)





const PORT = process.env.SERVER_PORT || 2000
app.listen(PORT, (err) => {
    if(err) throw err

    console.log(`server started in port ${PORT}`);
})


