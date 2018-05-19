const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// findOneAndRemove
Todo.findOneAndRemove({_id:'5afffdb7f1526a525113ebb6'}).then((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('5afffdb7f1526a525113ebb6').then((todo)=>{
  console.log(todo);
});
