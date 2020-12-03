var _ = require("lodash@4.17.10")
/// [demo]

var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false

/// [demo]

console.log(deep[0] === objects[0]);