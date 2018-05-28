//const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id:10
};

var token = jwt.sign(data, '123abc'); //creates HASH
var decoded = jwt.verify(token, '123abcc'); // Verifies the HASH
console.log('decoded:', decoded);
// var message = 'I am user number 543';
// var hash = SHA256(message).toString();
// console.log(`Message: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash:SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
//   console.log('data not changed');
// if(resultHash === token.hash){
// }else{
//   console.log('data compormised');
// }
