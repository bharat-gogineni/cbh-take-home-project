const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey('test'));
console.log(deterministicPartitionKey(Math.floor(100000 + Math.random() * 900000)));
console.log(deterministicPartitionKey({partitionKey:'test'}));