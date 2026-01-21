// return is used inside a function to send a value back to where the function was called and stop the function execution.
function sum (a,b ){
const result = a+b;
return result
}
// return data we can a store in a variable
const r1= sum(20,40) 

const r2=sum(33,49)
const r3=sum(323,32)
const r4=sum(33,22)
console.log(r1,r2,r3,r4)