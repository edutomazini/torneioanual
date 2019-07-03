const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./api/rest/index')(app)

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.redirect('./apidoc');
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log('server executando.... http://localhost:' + port + '/'))