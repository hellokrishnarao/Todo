// Users
var mongoose = require('mongoose');
var Users = mongoose.model('Users', {
	email: {
		type: String,
		required: true,
		minlength:1,
		trim: true
	}
});


// var newUser = new Users({
// 	email: 'krisna@gmail.com',
	
// });

// newUser.save().then((doc)=>{
// 	console.log(doc)
// }, (e)=>{
// console.log('Unable to add user')
// })

module.exports = {Users};