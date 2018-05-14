const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodosApp');
    // db.collection('Todos').find({
    //     _id:new ObjectID('5af5ca9fe2aeea11e464df54')
    // }).toArray().then((count)=>{
    //     console.log(`Todos:${count}`);
    // }, (err) => {
    //     console.log('unable to fetch todos', err);        
    // });

    db.collection('Users').find({name:'Andrew'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log(err);
    })
    // client.close();
});
