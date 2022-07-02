const connectomongo = require("./db")
const express = require('express')
connectomongo(); 
const app = express()
const port = 5000

app.use(express.json())

app.use('/api/auth', require('./routes/auth')) 
app.use('/api/note', require('./routes/note')) 

app.listen(port, () => {
  console.log(` App listening on port ${port}`)
})
