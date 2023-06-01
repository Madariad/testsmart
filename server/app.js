const express = require('express')
const studentsRoutes = require('./routes/studentsRoutes')
const teachersRoutes = require('./routes/teachersRoutes')
const app = express()
const cors = require('cors');
require('dotenv').config()
const pool = require('./utils/db')
const adminRoutes = require('./routes/adminsRoutes') 
const jwt = require('jsonwebtoken');
const authenticateToken = require('./middleware/authenticateToken')
const expressHandlebars = require('express-handlebars');
const path = require('path')

pool.getConnection((err, connection) => {
     if (err) {
        console.log(err);
     }
    if (connection) {
        console.log('database connection');
    }
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('layout', 'test'); 

app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'test', 
    layoutsDir: path.join(app.get('views'), 'layouts')
}));


app.use(express.json())
app.use(cors());

app.use('/api/v1/students', studentsRoutes)
app.use('/api/v1/teachers', teachersRoutes)
app.use('/admin', adminRoutes)


// app.get('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'Protected route', user: req.user });
// });
  

const PORT = process.env.SERVER_PORT || 5000
app.listen(PORT, (err) => {
    if(err) throw err

    console.log(`server started in port ${PORT}`);
})


