const express = require('express')
const app = express()
const PORT = 8000

var cors = require('cors');

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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
