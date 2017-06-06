const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Can\'t connect!');
    }

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: "Something to do 5"
    // }).then((result) => {
    //     console.log(result.result);
    // });

    //deleteOnde
    // db.collection('Todos').deleteOne({
    //     text: "Something to do 4"
    // }).then((result) => {
    //     console.log(result.result);
    // });

    //fineOndAndDelete
    db.collection('Todos').findOneAndDelete({
        text: "Something to do 4"
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    //db.close();


})