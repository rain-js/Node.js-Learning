var validator = require('./lib/index')

// console.log(validator)

console.log(validator.isEmail('foo@gmail.com'))

console.log(validator.isAllEnglish('hello世界'))

console.log(validator.isAllEnglish('hello'))