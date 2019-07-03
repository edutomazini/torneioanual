const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./api/rest/index')(app)

app.get('/', function (req, res) {
    res.send('api torneio Anual');
});


const port = process.env.PORT || 3000
app.listen(port, () => console.log('server executando.... http://localhost:' + port + '/'))