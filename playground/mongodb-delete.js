//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db /*db object*/)=>
{
	if (error) 
	{
		return console.log("Unable to connect to mongo db");
	} 
	console.log("Connected to MongoDB");



	// Delete Many

	// db.collection('Todos').deleteMany({text: 'Have lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	//Delete One

	db.collection('Users').deleteMany({name: 'Krishna Rao'});
	

	//Find one and delete

	db.close();
});