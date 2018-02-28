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
	// All the code to be written 

	// db.collection('Todos').insertOne({
	// 	text: 'Somethings',
	// 	completed: false
	// }, (error, result) => {

	// 	if (error) 
	// 	{
	// 		return console.log("Can't be insterted");
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 4));
	// });


	// db.collection('Users').insertOne({

	// 	name: 'Krishna Rao',
	// 	age: 19,
	// 	location: 'Bengaluru'
	// }, (error, result) => {

	// 	if (error) 
	// 	{
	// 		return console.log("Can't be insterted");
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });



	// Before closing
	db.close();
});