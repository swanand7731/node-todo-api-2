const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     if(err){
//         return console.log('unable to connect to MongoDB server');
//     }

//     console.log('connected to MongoDB server');
//     const db = client.db('TodosApp');

//     db.collection('Todos').insertOne({
//         text:'do something',
//         completed:false
//     }, (err, res)=>{
//         if(err)
//             console.log('unable to insert todo :', err)
        
//         console.log(JSON.stringify(res.ops, undefined,2));    
//     })    
//     client.close();
// });
