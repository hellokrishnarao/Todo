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

	// Code

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5a7feb92a63c4d6fc9f0ed5d")
	}, {
		$set :{
			name: 'Krishna Rao',
			location: 'Bangalore'
		},
		$inc: {
			age: 1
		}
	},{
		returnOriginal: false
	}).then((result)=>{
		console.log(result)
	})
	db.close();
});