const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const validator = require('validator');
const isEmpty = require('lodash/isEmpty');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express()
const dev = app.get('env') !== 'production'

if (!dev) {
	app.disable('x-powered-by')
	app.use(compression())
	app.use(morgan('common'))

	app.use(express.static(path.resolve(__dirname, 'build')))

	app.use(bodyParser.urlencoded({
    extended:true
}));

	app.use(bodyParser.json());

	function validateInput(data){
		let errors = {}

		if (validator.isEmpty(data.name)){
			errors.name = 'Name is required'
		}

		if (validator.isEmpty(data.email)){
			errors.email = 'Email is required'
		}

		if(!validator.isEmail(data.email)){
			errors.email = 'Enter a valid email address'
		}

		if (validator.isEmpty(data.message)){
			errors.message = 'Message is required'
		}

		return {
			errors,
			isValid: isEmpty(errors)
		}
	}

	app.post("/consult", function(req, res){
		const { errors, isValid } = validateInput(req.body);

		if (!isValid){
			res.status(400).json(errors)
		}
		else {
			sgMail.setApiKey(process.env.SENDGRID_API_KEY);
		const msg = {
			to: 'robert.n.ridley@gmail.com',
			from: `${req.body.name} <${req.body.email}>`,
			subject: 'Project Request',
			text: req.body.message,
		};
		sgMail
        .send(msg)
				.then(() => 
				res.status(200).json({success: true, status: 'Form submitted sucessfully'})).then(
					console.log('Mail sent successfully')
				)
				.catch(error => console.error(error.toString()))
		}
});

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
	})
}

if (dev) {
	app.use(morgan('dev'))
}

const server = createServer(app)

server.listen(PORT, err => {
	if (err) throw err

	console.log('Server started! Port: ' + PORT)
});
