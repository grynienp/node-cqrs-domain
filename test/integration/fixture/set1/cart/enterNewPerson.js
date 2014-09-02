// if exports is an array, it will be the same like loading multiple files...
//module.exports = require('cqrs-domain').defineCommand({
module.exports = require('../../../../../').defineCommand({
  name: 'enterNewPerson',  // optional, default is file name without extension
  // version: 1, // optional, default 0
  payload: 'payload' // if not defined it will pass the whole command...
}, function (data, aggregate) {
  aggregate.apply('enteredNewPerson', data);
  // or
  // aggregate.apply({
  //   event: 'enteredNewPerson',
  //   payload: data
  // });
});
