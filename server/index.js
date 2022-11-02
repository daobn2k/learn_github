const express = require('express')
const app = express()

var cors = require('cors');
const ConnectDB = require('./config/db');
// connection mongo db
const key = require('./config/index');

const { port , mongoURL , env} = key
ConnectDB(mongoURL)
// use it before all route definitions
app.use(cors())
app.get('/', (req, res) => {
  res.send({
          "example":[
            "DOCKER CONTAINER",
            "DOCKER IMAGE", 
            "DOCKER COMPOSE",
            "DOCKER VOLUMNE"
          ]       
  })
})

app.listen(port, () => {
  console.log(mongoURL,'mongoURL');
  console.log(`Example app listening on port ${port} 31312321`)
})
