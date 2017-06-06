const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Can\'t connect!');
    }

    db.collection('Todo').find({
        _id: new ObjectID('5935f6cd0e10e20394cf6548')
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    db.collection('Todo').find().count().then((count) => {
        console.log(`Total todos: ${count}`);
    });

    db.close();


})