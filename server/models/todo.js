var mongoose = require('mongoose');
var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required:true,
		minlength:1,
		trim : true // remove white spaces
	},
	completed:{
		type: Boolean,
		default: false
	},
	completedAt:{
		type: Number,
		default: null
	}	
});

var newTodo = new Todo({
	text: 'node js',
	completed: true
});

newTodo.save().then((doc)=>{
	console.log(doc)
}, (e)=>{
console.log('Unable to add todo')
})

module.exports = {Todo};