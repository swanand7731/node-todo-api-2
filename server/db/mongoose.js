var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://curious_mlab_user:Passw0rd@ds227740.mlab.com:27740/todoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};