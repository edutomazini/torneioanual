const express = require('express')
const path = require('path');

const app = express()

require('./api/rest/index')(app)

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/', function (req, res) {
  res.redirect('./apidoc')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('server executando.... http://localhost:' + port + '/'))