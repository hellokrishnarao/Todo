var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (request, response) =>{
	var todo = new Todo({
		text : request.body.text
	});

	todo.save().then((doc) =>{
		response.send(doc);
	}, (e)=>{
		res.status(400).send(e);
	});
});
//GET /todos/12345
app.get('/todos/:id', (req,res) =>
	{
		var id = req.params.id;
		console.log('ID for: ', id);

		if (!(ObjectID.isValid(id))) 
		{
			console.log('Page not Found 404');
			return res.status(404).send();
		}

		Todo.findById(id).then((todo)=>{
			if (!todo) {
				return res.status(404).send();

			}
			res.send({todo});
		}).catch((e)=>{
			res.status(400).send();
		})


	});

app.listen(3000, () => {
	console.log("Started server on 3000");
});