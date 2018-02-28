const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db /*db object*/)=>
{
	if (error) 
	{
		return console.log("Unable to connect to mongo db");
	} 
	console.log("Connected to MongoDB");
	
	db.collection('Users').find({name: "Mike"}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(docs);
	},()=>{

	});



	db.collection('Todos').find().count().then((count)=>{
		console.log(`Todos Count: ${count}`);
		 
	},()=>{

	});

	// Before closing
	db.close();
});