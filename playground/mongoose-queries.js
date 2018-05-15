const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5af9baf6007f641704f3647911';

// if(!ObjectID.isValid(id)){
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     console.log(todo);
// }).catch((e)=>{
//     console.log(e);
// });

User.findById('5afa489bf1526a525113bdb6').then((user)=>{
    if(!user)
        return console.log('no user found');
    console.log(JSON.stringify(user, undefined, 2));
}, (e)=>{
    console.log(e);
})