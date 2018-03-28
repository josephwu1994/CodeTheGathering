const mongoose = require('mongoose');



const userModel = new mongoose.Schema({
	fName : {type: String, required: true},
	lName: {type: String, required: true},
	pin: {type: String, required: true}
});

module.exports = mongoose.model('User', userModel);