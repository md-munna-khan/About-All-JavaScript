// constructor pattern
const a1 = new Array() // []
// new Array mean []
console.log(a1,a1.length) // [] 0
// some times need declare before length thats time we call constructor and its not work in literal array

const a2= new Array(5)
console.log(a2,a2.length)// [ <5 empty items> ] 5 // before length call

const a3 = new Array(1,2,3,4,5);
console.log(a3,a3.length)



// factory pattern
// in the factory pattern we dont need call to new keywords
const b1 =  Array() // []
// new Array mean []
console.log(b1,b1.length) // [] 0
// some times need declare before length thats time we call constructor and its not work in literal array

const b2=  Array(5)
console.log(b2,b2.length)// [ <5 empty items> ] 5 // before length call

const b3 =  Array(1,2,3,4,5);
console.log(b3,b3.length)

// testing
console.log(a1.__proto__.constructor)
console.log(b1.__proto__.constructor)
// output
// [Function: Array]
// [Function: Array]