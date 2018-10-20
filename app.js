const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const db = require('./utils/pg-util')

const signup = require('./routes/signup');

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.use(bodyParser.json({limit: '100mb' , type : 'application/json'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.use('/', signup);

app.listen(port, () => {
	console.log('Listening to port 3000...')
})
