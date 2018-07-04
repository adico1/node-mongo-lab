// Retrieve
const MongoClient = require('mongodb');

const dbName = 'node-mongo-lab';
const connectionString = `mongodb://localhost:27017,localhost:27018,localhost:27019/${dbName}?replicaSet=my-mongo-set`;
// Connect to the db
MongoClient.connect(connectionString, function(err, database) {
    if(err) { return console.dir(err); }  

    console.log("We are connected");

    const db = database.db(dbName);

    db.collection('test', function(err, collection) {});

    db.collection('test', {w:1}, function(err, collection) {});

    db.createCollection('test', function(err, collection) {});

    db.createCollection('test', {w:1}, function(err, collection) {});
});