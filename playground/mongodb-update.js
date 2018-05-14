const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err)
        console.log('unable to connect to MongoDB server', err);

    console.log('connected to MongoDB server');
    var db = client.db('TodosApp');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5af72decf1526a52511369c9")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID("5af7b524f1526a5251137650")   
    },{
        $inc:{
            age:1
        },
        $set:{
            name:'danny'
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });
 });