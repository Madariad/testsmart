const express = require('express')
// const rouer = require('./routes')
const app = express()

app.use(express.json())
// app.use(rouer)


const PORT = process.env.SERVER_PORT || 2000
app.listen(PORT, (err) => {
    if(err) throw err

    console.log(`server started in port ${PORT}`);
})


