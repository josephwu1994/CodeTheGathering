const User = require('./../Models/userModel');
const path = require('path');
const account = require('./../Models/Accounts.js');
const userController = {};




userController.getAccounts = (next) => {
	User.find({},next);
}

userController.createUser = (req, res, next) => {
	if(!(req.body.fName && req.body.lName && req.body.pin)) {
		return res.sendFile(path.join(__dirname, './../../views/error.html'));
	}
	if (account.includes(req.body.fName.toLowerCase()+' '+req.body.lName.toLowerCase())) {
		User.create((req.body), (err, user) => {
			if (err) res.json('Error Creating Account');
			next();
		})
	} else {
		res.json('You are not in Cohort 20');
	}
}

userController.verify = (req, res, next) => {
	User.findOne({ fName: req.body.fName, lName: req.body.lName}, (err, info) => {
		if (err) throw err;
		if (req.body.pin === info.pin){
			next();
		} else {
			res.sendFile(path.join(__dirname, './../../views/login.html'));
		}
	});
}

module.exports = userController;