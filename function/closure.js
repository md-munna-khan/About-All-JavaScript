// closure

function multiplier (t){
    return function(n){
        return n*t
    }
}

const multiplyBy5 = multiplier(5) // closure

console.log(multiplyBy5(20))
console.log(multiplyBy5(40))
console.log(multiplyBy5(2))

// What is multiplyBy5 really?

// multiplyBy5 is not a number, it is a function:

// multiplyBy5 = function(n) {
//     return n * 5
// }


// It stores the inner function itself, with t = 5 remembered.

// So you can now call it multiple times with different n values.