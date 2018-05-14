const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        console.log('unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodosApp');
    // db.collection('Todos').deleteMany({text:'do this and that'}).then((result)=>{
    //     console.log(result);
    // })

    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name:'Andrew'}).then((result)=>{
    //     console.log(result);
    // });

    var obj = ObjectID("5af7b629f1526a5251137682");
    db.collection('Users').findOneAndDelete({_id:obj}).then((result)=>{
        console.log(result);
    });

}); 