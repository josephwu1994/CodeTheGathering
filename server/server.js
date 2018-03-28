const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const userController = require('./Controllers/userController');
const URI = 'mongodb://joseph:codesmith@ds221148.mlab.com:21148/codethegathering';
mongoose.connect(URI);
// view engine setup
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('Content-Type', 'application/json');


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './../views/login.html'));
});

app.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname, './../views/signup.html'));
});

app.get('/Cohort20', (req, res) => {
	res.sendFile(path.join(__dirname, './../views/index.html'));
});

app.post('/login', userController.verify, (req, res) => {
	res.redirect('/Cohort20');
});

app.post('/signup', userController.createUser, (req, res) => {
	res.redirect('/');
});

app.listen(3000);
module.exports = app;
